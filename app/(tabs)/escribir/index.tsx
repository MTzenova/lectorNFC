import { View, Text, TextInput, Image, Pressable, ScrollView } from 'react-native';
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles';
import Boton from '@/components/Boton';
import { Colors } from '@/theme/Colors';


const escribir = () => {
    return (
      <View style={GlobalStyles.contenedor}>

        <Text style={[GlobalStyles.textoInfo]}>Información a editar:</Text>

        <View style={GlobalStyles.contenedorDatos}>
            <Image source={require("../../../assets/images/imageUsuario.png")} style={{width:200, height:200, alignSelf:'center', marginBottom:30, marginTop:30}}></Image>

            <View style={GlobalStyles.contendorInput}>
                <Text style={GlobalStyles.textoEscrbir}>Nombre:</Text>
                <TextInput style={GlobalStyles.input} placeholder='Antonio'></TextInput>
            </View>

            <View style={GlobalStyles.contendorInput}>
                <Text style={GlobalStyles.textoEscrbir}>Apellidos:</Text>
                <TextInput style={GlobalStyles.input} placeholder='Morales García'></TextInput>
            </View>

            <View style={GlobalStyles.contendorInput}>
                <Text style={GlobalStyles.textoEscrbir}>Grado:</Text>
                <TextInput style={GlobalStyles.input} placeholder='2ºDAM'></TextInput>
            </View>

        </View>

        <Boton label="GUARDAR" link="../../../" />
        
      </View>
    )
  }
  
export default escribir