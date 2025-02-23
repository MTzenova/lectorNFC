import { View, Text, TextInput, Image, Pressable } from 'react-native';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';
import React from 'react';
import { Colors } from '@/theme/Colors';
import { Alert } from "react-native";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/FireBaseconfig';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const logIn = async () => {
    try {
      const user = await (signInWithEmailAndPassword(auth,email,password));
      if (user) router.replace('./tabs')
    } catch (error:any) {
      console.log(error);
      Alert.alert("Inicio de sesión incorrecto", "error.message");
    }
  }


  const register = async () => {
    try {
      const user = await (createUserWithEmailAndPassword(auth,email,password));
      if (user) router.replace('./tabs');
    } catch (error: any) {
      console.log(error);
      Alert.alert("Error al registrar el usuario", error.message);
    }
  }
  return (
    <View style={GlobalStyles.contenedorLogin}>
      <View style={GlobalStyles.contenedorCabeceraLogin}>
        <Image source={require('../assets/images/logo.png')} style={GlobalStyles.imagenLogo} />

        <Text style={GlobalStyles.textoTituloLogin}>Lector NFC</Text>
      </View>
      
      <Text style={GlobalStyles.textoInfo}>Iniciar sesión:</Text>
    
      <View style={GlobalStyles.contenedorDatosLogin}>
    
        <View style={GlobalStyles.contendorInputLogin}>
          <Text style={GlobalStyles.textoEscrbir}>Usuario:</Text>
          <TextInput style={GlobalStyles.inputLogin} placeholder='ejemplo@gmail.com' placeholderTextColor={Colors.lightGrey}
          value={email} onChangeText={setEmail}></TextInput>
        </View>
    
        <View style={GlobalStyles.contendorInputLogin}>
          <Text style={GlobalStyles.textoEscrbir}>Contraseña:</Text>
          <TextInput style={GlobalStyles.inputLogin} placeholder='Introduce tu contraseña...' 
          secureTextEntry={true} placeholderTextColor={Colors.lightGrey}  value={password} onChangeText={setPassword}></TextInput>
        </View>
    
      </View>
    
    <View style={GlobalStyles.botonesLogin}>

     
      <Pressable onPress={() => { router.push('./tabs') }}>
          <Text style={GlobalStyles.boton} onPress={logIn}>ACCEDER</Text>
      </Pressable>
      
      <Pressable onPress={() => { router.push('../tabs/escribir') }}>
        <Text style={GlobalStyles.textoBotonRegistrar} onPress={register}>Regístrate aquí</Text>
      </Pressable>
    </View>
      
            
    </View>
  );
}