import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { GlobalStyles } from '@/theme/GlobalStyles';

export default function HomeScreen() {
  return (
    <View style={GlobalStyles.container}>
      <View style={[GlobalStyles.seccionesHeader]}>
        <Text style={GlobalStyles.textoTitulo}>Lector NFC</Text>
        <Image
          source={require('../assets/images/logo.png')}
          style={[{ width: 30, height: 30 }]} />
      </View>
      <View style={GlobalStyles.containerCentrado}>
        <Text style={[GlobalStyles.textoBody, { marginEnd: '10%' }]}>INFORMACIÓN</Text>
        <View style={GlobalStyles.containerInfo}>
          <Image source={require('../assets/images/imageUsuario.png')} style={GlobalStyles.imagenPerfil} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <TextInput style={GlobalStyles.inputTexto}></TextInput>
            <MaterialIcons name="edit" size={20} color="black" />


          </View>

          {/* Campo de texto para el curso */}

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TextInput style={[GlobalStyles.inputTexto]}></TextInput>
            <MaterialIcons
              // El ícono se coloca al fondo del input
              name="edit"
              size={20}
              color="black"/>
          </View>



          {/* Campo de texto para la tecnología */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <TextInput style={GlobalStyles.inputTexto}></TextInput>
            <MaterialIcons name="edit" size={20} color="black" />



          </View>

        </View>
      </View>
    </View>
  );
}
