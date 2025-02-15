import { View, Text, TextInput, Image, Pressable, ScrollView } from 'react-native';
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles';
import { Colors } from '@/theme/Colors';
import { router } from 'expo-router';


const escribir = () => {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={GlobalStyles.contenedor}>

        <Text style={[GlobalStyles.textoInfo]}>Información a editar:</Text>

        <View style={GlobalStyles.contenedorDatos}>

            <Image source={require("../../../assets/images/imageUsuario.png")} style={GlobalStyles.imagenUsuario}></Image>

            <View style={GlobalStyles.contenedorNTarjeta}>
                <Text style={GlobalStyles.textoEscrbir}>Nº Tarjeta:</Text>
                <Text style={[GlobalStyles.textoEscrbir,{marginLeft:'9%'}]}>A:1:12:B3:4C</Text>
            </View>

            <View style={GlobalStyles.contendorInput}>
                <Text style={GlobalStyles.textoEscrbir}>NRE:</Text>
                <TextInput style={GlobalStyles.input} placeholder='1234567' placeholderTextColor={Colors.lightGrey}></TextInput>
            </View>

            <View style={GlobalStyles.contendorInput}>
                <Text style={GlobalStyles.textoEscrbir}>Nombre:</Text>
                <TextInput style={GlobalStyles.input} placeholder='Antonio' placeholderTextColor={Colors.lightGrey}></TextInput>
            </View>

            <View style={GlobalStyles.contendorInput}>
                <Text style={GlobalStyles.textoEscrbir}>Apellidos:</Text>
                <TextInput style={GlobalStyles.input} placeholder='Morales García' placeholderTextColor={Colors.lightGrey}></TextInput>
            </View>

            <View style={GlobalStyles.contendorInput}>
                <Text style={GlobalStyles.textoEscrbir}>Grado:</Text>
                <TextInput style={GlobalStyles.input} placeholder='2ºDAM' placeholderTextColor={Colors.lightGrey}></TextInput>
            </View>
            
        </View>

        <View style={[GlobalStyles.botonGuardar]}>
          <Pressable onPress={() => { router.push('../') }}>
            <Text style={[, GlobalStyles.boton]}>GUARDAR</Text>
          </Pressable>
        </View>
      
        
      </View>
      </ScrollView>
    )
  }
  
export default escribir