import { View, Text, Pressable} from 'react-native';
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';


const salir = () => {
    return (
      
      
      <View style={GlobalStyles.contenedor}>

        <Pressable onPress={() => { router.push('../../') }}>
                          <Text style={GlobalStyles.textoBotonRegistrar}>Salir</Text>
              </Pressable>
        
      </View>
    )
  }
  
export default salir