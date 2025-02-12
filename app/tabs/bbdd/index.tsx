import { View, Text, TextInput, Image, Pressable, ScrollView } from 'react-native';
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles';
import Boton from '@/components/Boton';
import { Colors } from '@/theme/Colors';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';


const bbdd = () => {
    return (
      
      <View style={GlobalStyles.contenedor}>

        <View style={GlobalStyles.contenedorBuscarBBDD}>
            <Text style={[GlobalStyles.textoTituloBBDD]}>Base de datos de alumnos</Text>
            <TextInput style={GlobalStyles.inputBBDD} placeholder='Buscar por NRE...' placeholderTextColor={Colors.lightGrey}></TextInput>
        </View>
        
        <View style={GlobalStyles.contenedorDatos}>

            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            <Text style={GlobalStyles.textoEscrbir}>Alumnos</Text>
            
        </View>
        
      </View>
    )
  }
  
export default bbdd