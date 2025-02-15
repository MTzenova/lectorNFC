import { View, Text, TextInput, Image, Pressable } from 'react-native';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';
import React from 'react';
import { Colors } from '@/theme/Colors';

export default function HomeScreen() {
  return (
    <View style={GlobalStyles.contenedorLogin}>
      <View style={GlobalStyles.contenedorCabeceraLogin}>
        <Image source={require('../assets/images/logo.png')} style={{width: 30, height: 30, alignSelf:'center', marginRight:'2%'}} />

        <Text style={GlobalStyles.textoTituloLogin}>Lector NFC</Text>
      </View>
      
      <Text style={GlobalStyles.textoInfo}>Iniciar sesión:</Text>
    
      <View style={GlobalStyles.contenedorDatosLogin}>
    
        <View style={GlobalStyles.contendorInputLogin}>
          <Text style={GlobalStyles.textoEscrbir}>Usuario:</Text>
          <TextInput style={GlobalStyles.inputLogin} placeholder='Introduce tu nombre de usuario...' placeholderTextColor={Colors.lightGrey}></TextInput>
        </View>
    
        <View style={GlobalStyles.contendorInputLogin}>
          <Text style={GlobalStyles.textoEscrbir}>Contraseña:</Text>
          <TextInput style={GlobalStyles.inputLogin} placeholder='Introduce tu contraseña...' secureTextEntry={true} placeholderTextColor={Colors.lightGrey}></TextInput>
        </View>
    
      </View>
    
    <View style={GlobalStyles.botonesLogin}>

     
          <Pressable onPress={() => { router.push('./tabs') }}>
            <Text style={[, GlobalStyles.boton]}>ACCEDER</Text>
          </Pressable>
      

      <Pressable onPress={() => { router.push('../tabs/escribir') }}>
                  <Text style={GlobalStyles.textoBotonRegistrar}>Regístrate aquí</Text>
      </Pressable>
    </View>
      
            
    </View>
  );
}