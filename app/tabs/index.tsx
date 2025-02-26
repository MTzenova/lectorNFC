import { View, Text, Image, Pressable } from 'react-native';
import React from 'react'
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { useEffect, useState } from 'react';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';
import { useTarjetaStore } from '@/store/useTarjetaStore';

const lector = () => {
  const{setTarjeta, setNre, setNombre, setApellidos, setGrado} = useTarjetaStore();
  const [tag, setTag] = useState("");

  const readNFT = async () => {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const data = await NfcManager.getTag();
      if (data) {
        const tarjetaID = JSON.stringify(data, null, 2);
        setTag(tarjetaID);
        setTarjeta(tarjetaID);
        
        await NfcManager.close();
        NfcManager.cancelTechnologyRequest();
        
        router.push('/tabs/escribir');
      }
      const tarjetaID = JSON.stringify(data,null,2);
        setTag(tarjetaID);
        setTarjeta(tarjetaID);
        await NfcManager.close();

      
    }catch (ex) {
      console.warn("ERROR", ex)
    } finally {
      NfcManager.cancelTechnologyRequest();
    }

  };

  return (
    <View style={GlobalStyles.container}>

      <View style={[GlobalStyles.containerCentrado]}>

        <Text style={GlobalStyles.textoBody}>ACERQUE SU TARJETA NFC...</Text>
       
        <Image
            source={require('../../assets/images/nfc.png')}
            style={GlobalStyles.imagenNFC}/>
        
        <Pressable onPress={readNFT} style={[GlobalStyles.boton,GlobalStyles.botonLimpiar]}>
          <Text style={GlobalStyles.textoLimpiar}>Escribir</Text>
        </Pressable>
        <Pressable style={GlobalStyles.botonLimpiar} onPress={() =>setTag("")}>
          <Text style={GlobalStyles.textoLimpiar}>Limpiar</Text>
        </Pressable>

      </View>
      
    </View>
  )
}

export default lector;