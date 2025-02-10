import { View, Text, Image, Pressable } from 'react-native';

import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={GlobalStyles.container}>
      
      
      <View style={[GlobalStyles.containerCentrado]}>
        <Text style={GlobalStyles.textoBody}>ACERQUE SU TARJETA</Text>
        <Pressable onPress={()=>{router.push('/(tabs)/escribir')}}>
        <Image
          source={require('../../assets/images/nfc.png')}
          style={[{ width: 250, height: 250 }]} /></Pressable>
      </View>
      
    </View>
  );
}


/*<View style={[GlobalStyles.seccionesHeader]}>
        <Text style={GlobalStyles.textoTitulo}>Lector NFC</Text>
        
        <Image
          source={require('../assets/images/logo.png')}
          style={[{ width: 30, height: 30 }]} />
      </View> */