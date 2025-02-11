import { View, Text, TextInput, Image, Pressable, ScrollView } from 'react-native';
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles';
import Boton from '@/components/Boton';
import { Colors } from '@/theme/Colors';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';


const escribir = () => {
    return (
      
      
      <View style={GlobalStyles.contenedor}>

        <Text style={[GlobalStyles.textoInfo]}>Información a editar:</Text>

        <View style={GlobalStyles.contenedorDatos}>

            <Image source={require("../../../assets/images/imageUsuario.png")} style={GlobalStyles.imagenUsuario}></Image>

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

        <Boton label="GUARDAR" link='../'/>
        
      </View>
    )
  }
  
export default escribir