import { View, Text, Image, Pressable } from 'react-native';
import React from 'react'
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { useEffect, useState } from 'react';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';

const lector = () => {
  const [tag, setTag] = useState("");

  const readNFT = async () => {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const data = await NfcManager.getTag();
      setTag(JSON.stringify(data, null, 2));
    }catch (ex) {
      console.warn("ERROR", ex)
    } finally {
      NfcManager.cancelTechnologyRequest();
    }

  };

  useEffect(() => {
    readNFT();
  }, [])

  return (
    <View style={GlobalStyles.container}>
      <Text>{tag}</Text>
      <View style={[GlobalStyles.containerCentrado]}>

        <Text style={GlobalStyles.textoBody}>ACERQUE SU TARJETA NFC...</Text>

        <Pressable onPress={()=>{router.push('/tabs/escribir')}}>
          <Image
            source={require('../../assets/images/nfc.png')}
            style={GlobalStyles.imagenNFC}/>
        </Pressable>
        <Pressable style={GlobalStyles.botonLimpiar} onPress={() =>setTag("")}>
        <Text style={GlobalStyles.textoLimpiar}>Limpiar</Text>
      </Pressable>

      </View>
      
    </View>
  )
}

export default lector;