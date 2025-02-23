import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { Colors } from '@/theme/Colors';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/FireBaseconfig';
import { useTarjetaStore } from '@/store/useTarjetaStore';

const escribir = () => {
  const {tarjeta} = useTarjetaStore();
  const [nre, setNre] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [grado, setGrado] = useState("");

  
  const guardarDatos = async () => {
   
    if (!nre || !nombre || !apellidos || !grado) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }
    try {
      
      await addDoc(collection(db, "usuarios"), {
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
            <Text style={[GlobalStyles.textoEscrbir, { marginLeft: '9%' }]}>{tarjeta}</Text>
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
          <Pressable onPress={guardarDatos}>
            <Text style={GlobalStyles.boton}>GUARDAR</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
  }
  
export default escribir