import { View, Text, Image, Pressable } from 'react-native';
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';

const lector = () => {
  return (
    <View style={GlobalStyles.container}>
      
      <View style={[GlobalStyles.containerCentrado]}>

        <Text style={GlobalStyles.textoBody}>ACERQUE SU TARJETA NFC...</Text>

        <Pressable onPress={()=>{router.push('/tabs/escribir')}}>
          <Image
            source={require('../../assets/images/nfc.png')}
            style={[{ width: 400, height: 400 }]}/>
        </Pressable>

      </View>
      
    </View>
  )
}

export default lector;