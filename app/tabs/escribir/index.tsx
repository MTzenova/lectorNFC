import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Pressable, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { Colors } from '@/theme/Colors';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/FireBaseconfig';
import { useTarjetaStore } from '@/store/useTarjetaStore';
import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

const escribir = () => {
  // Obtener tarjeta y la función procesarTarjeta del store
  const { tarjeta, procesarTarjeta } = useTarjetaStore();
  const [nre, setNre] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [grado, setGrado] = useState("");
  
const grabarTarjetaNFC = async() => {
  if (!nre || !nombre || !apellidos || !grado) {
      Alert.alert("Error", "Por favor, completa todos los campos antes de grabar la tarjeta.");
      return;
  }
  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
   
    const mensaje = JSON.stringify({
      nre,
      nombre,
      apellidos,
      grado
    });

    const bytes = Ndef.encodeMessage([Ndef.textRecord(mensaje)]);

    if (bytes) {
      await NfcManager.ndefHandler.writeNdefMessage(bytes);
      Alert.alert("Éxito", "Datos escritos en la tarjeta NFC");
    } else {
      Alert.alert("Error", "No se pudo codificar el mensaje.");
    } 
  await NfcManager.close();
  } 
    catch (ex) {
      console.warn("ERROR al escribir en NFC:", ex);
      Alert.alert("Error", "Hubo un problema al escribir en la tarjeta NFC.");
  } 
    finally {
      NfcManager.cancelTechnologyRequest();
  }
  };

  // Extraer solo el valor del ID
  const extraerValorID = (texto: string) => {
    // Si el texto ya está procesado por procesarTarjeta
    if (texto.includes('"id":')) {
      // Buscar la posición después de "id":
      const inicioValor = texto.indexOf('"id":') + 5;
      // Encontrar el final del valor (siguiente coma o })
      let finValor = texto.indexOf(',', inicioValor);
      if (finValor === -1) {
        finValor = texto.indexOf('}', inicioValor);
      }
      if (finValor === -1) {
        finValor = texto.length;
      }
      
      // Extraer solo el valor y eliminar comillas si las tiene
      let valorID = texto.substring(inicioValor, finValor).trim();
      if (valorID.startsWith('"') && valorID.endsWith('"')) {
        valorID = valorID.substring(1, valorID.length - 1);
      }
      return valorID;
    }
    return texto;
  };
  
  const guardarDatos = async () => {
    if (!nre || !nombre || !apellidos || !grado) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }
    try {
      const valorIDTarjeta = extraerValorID(tarjeta);
      
      await addDoc(collection(db, "usuarios"), {
        tarjeta: valorIDTarjeta,
        nre,
        nombre,
        apellidos,
        grado,
      });
      Alert.alert("Éxito", "Datos guardados correctamente");
      router.push('../'); 
    } catch (error) {
      console.error("Error al guardar los datos:", error);
      Alert.alert("Error", "No se pudieron guardar los datos");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={GlobalStyles.contenedor}>
        <Text style={GlobalStyles.textoInfo}>Información a editar:</Text>

        <View style={GlobalStyles.contenedorDatos}>
          <Image 
            source={require("../../../assets/images/imageUsuario.png")} 
            style={GlobalStyles.imagenUsuario} 
          />

          <View style={GlobalStyles.contenedorNTarjeta}>
            <Text style={GlobalStyles.textoEscrbir}>Nº Tarjeta:</Text>
            <Text style={[GlobalStyles.textoEscrbir, { marginLeft: '9%' }]}>
              {extraerValorID(tarjeta)}
            </Text>
          </View>

          <View style={GlobalStyles.contendorInput}>
            <Text style={GlobalStyles.textoEscrbir}>NRE:</Text>
            <TextInput 
              style={GlobalStyles.input} 
              placeholder='1234567' 
              placeholderTextColor={Colors.lightGrey}
              value={nre}
              onChangeText={setNre}
            />
          </View>

          <View style={GlobalStyles.contendorInput}>
            <Text style={GlobalStyles.textoEscrbir}>Nombre:</Text>
            <TextInput 
              style={GlobalStyles.input} 
              placeholder='Antonio' 
              placeholderTextColor={Colors.lightGrey}
              value={nombre}
              onChangeText={setNombre}
            />
          </View>

          <View style={GlobalStyles.contendorInput}>
            <Text style={GlobalStyles.textoEscrbir}>Apellidos:</Text>
            <TextInput 
              style={GlobalStyles.input} 
              placeholder='Morales García' 
              placeholderTextColor={Colors.lightGrey}
              value={apellidos}
              onChangeText={setApellidos}
            />
          </View>

          <View style={GlobalStyles.contendorInput}>
            <Text style={GlobalStyles.textoEscrbir}>Grado:</Text>
            <TextInput 
              style={GlobalStyles.input} 
              placeholder='2ºDAM' 
              placeholderTextColor={Colors.lightGrey}
              value={grado}
              onChangeText={setGrado}
            />
          </View>
        </View>

        <View style={GlobalStyles.botonGuardar}>
          <Pressable onPress={async () => {await guardarDatos(); grabarTarjetaNFC();}}>
            <Text style={GlobalStyles.boton}>GUARDAR</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
  
export default escribir;