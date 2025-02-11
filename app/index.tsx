import { View, Text, TextInput, Image, Pressable, ScrollView } from 'react-native';

import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';
import Boton from '@/components/Boton';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={GlobalStyles.contenedorLogin}>
      <Text style={GlobalStyles.textoTituloLogin}>LECTOR NFC</Text>

      <Text style={GlobalStyles.textoInfo}>Iniciar sesión:</Text>
    
      <View style={GlobalStyles.contenedorDatosLogin}>
    
        <View style={GlobalStyles.contendorInputLogin}>
          <Text style={GlobalStyles.textoEscrbir}>Usuario:</Text>
          <TextInput style={GlobalStyles.inputLogin} placeholder='Introduce tu nombre de usuario...'></TextInput>
        </View>
    
        <View style={GlobalStyles.contendorInputLogin}>
          <Text style={GlobalStyles.textoEscrbir}>Contraseña:</Text>
          <TextInput style={GlobalStyles.inputLogin} placeholder='Introduce tu contraseña...' secureTextEntry={true}></TextInput>
        </View>
    
      </View>
    
      <Boton label="ACCEDER" link='./tabs'/>
            
    </View>
  );
}