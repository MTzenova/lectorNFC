import { View, Text, Pressable} from 'react-native';
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';
import { auth } from '@/FireBaseconfig';


const salir = () => {

  getAuth().onAuthStateChanged((user) =>{
    if (!user) router.replace('/');
    });

    return (
      
      
      <View style={GlobalStyles.contenedor}>

        <Pressable onPress={() => auth.signOut()}>
          <Text style={GlobalStyles.boton}>CERRAR SESIÓN</Text>
        </Pressable>
        
      </View>
    )
  }
  
export default salir