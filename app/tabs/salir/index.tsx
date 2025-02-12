import { View, Text, TextInput, Image, Pressable, ScrollView } from 'react-native';
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles';
import Boton from '@/components/Boton';
import { Colors } from '@/theme/Colors';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
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