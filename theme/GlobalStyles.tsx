import { StyleSheet } from "react-native";
import { Colors } from "./Colors";


export const GlobalStyles =  StyleSheet.create({
//boton
boton:{
    width: 200,
    height: 80,
    textAlign: 'center',
    padding:20,
    fontSize: 30,
    borderRadius: 30,
    borderWidth:2,
    backgroundColor: Colors.darkGreen,
    fontWeight:'bold',
    color:Colors.white,
},
//pantalla escribir
contenedor:{
    display:'flex',
    backgroundColor: Colors.lightGreen,
    alignItems:'center',
    flex: 1,
    justifyContent: 'center',
    width:'100%',
    height: 100,
},
contenedorDatos:{
    display:'flex',
    justifyContent: 'center',
    backgroundColor:Colors.white,
    width:'80%',
    borderWidth:3,
    borderColor:Colors.darkGreen,
    borderRadius:20,
    marginBottom:'20%',
},
contendorInput:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:60,
    marginRight:60,
    marginBottom:20,
},
imagenUsuario:{
    width:200,
    height:200,
    alignSelf:'center',
    marginBottom:30,
    marginTop:30,
},
input: {
    borderRadius: 25,
    borderWidth:2,
    borderColor:Colors.darkGreen,
    padding: 13,
    fontSize: 30,
    marginBottom: 10,
    width:'60%',
    height: 70,
    backgroundColor: Colors.white,
},
textoInfo:{
    fontSize:50,
    alignSelf:'flex-start',
    fontWeight:'bold',
    color:Colors.white,
    marginLeft:80,
    marginBottom:25,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
},
textoEscrbir:{
    fontSize:30,
    textAlign:'left',
    fontWeight:'bold',
},
//carlos
container: {
    flex: 1,
    backgroundColor: Colors.lightGreen,
},
containerCentrado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
seccionesHeader: {
    width:'100%',
    backgroundColor: Colors.darkGreen,
  },
textoTitulo:{
    fontSize: 30,
    color: Colors.white,
    fontWeight: 'bold',
    
  },
 
textoBody: {
    fontSize: 40,
    color: Colors.white,
    fontWeight: 'bold',
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
})
