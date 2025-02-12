import { StyleSheet } from "react-native";
import { Colors } from "./Colors";


export const GlobalStyles =  StyleSheet.create({
//boton
boton:{
    width: '100%',
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
botonesLogin:{
    display:'flex',
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    width:'80%',
    alignItems:'center',
},
botonGuardar:{
    display:'flex',
    width:'80%',
},
textoBotonRegistrar:{
    fontSize:30,
    textDecorationLine:'underline',
    fontWeight:'bold',
    color:Colors.white,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 3, height:3 },
    textShadowRadius: 1,
},
//barras
seccionesHeader: {
    width:'100%',
    backgroundColor: Colors.darkGreen,
    height:100,
},
seccionesFooter:{
    height: 80, //
    paddingBottom: 10,
    paddingTop: 10,
},
fuenteFooter:{
    fontSize:25,
},
//pantalla login
contenedorCabeceraLogin:{
    display:'flex',
    backgroundColor:Colors.darkGreen,
    width:'100%',
    flexDirection:'row-reverse',
    position:'fixed',
    top:0,
    height:100
},
contenedorLogin:{
    display:'flex',
    backgroundColor: Colors.lightGreen,
    alignItems:'center',
    flex: 1,
    justifyContent: 'center',
    width:'100%',
    height: 100,
},
contenedorDatosLogin:{
    display:'flex',
    justifyContent: 'center',
    backgroundColor:Colors.white,
    width:'80%',
    borderWidth:3,
    borderColor:Colors.darkGreen,
    borderRadius:20,
    marginBottom:'10%',
    paddingBottom:'5%',
    paddingTop:'5%'
},
contendorInputLogin:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    marginLeft:60,
    marginRight:60,
    marginBottom:20,
    width:'100%',
},
textoTituloLogin:{
    fontSize:40,
    alignSelf:'center',
    fontWeight:'bold',
    color:Colors.white,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 3, height:3 },
    textShadowRadius: 1,
    width:'100%',
    marginLeft:'2%'
},
inputLogin: {
    borderRadius: 25,
    borderWidth:2,
    borderColor:Colors.darkGreen,
    padding: 13,
    fontSize: 30,
    marginBottom: 10,
    width:'80%',
    height: 70,
    backgroundColor: Colors.white,
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
    marginBottom:'8%',
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
contenedorNTarjeta:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
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
    textShadowOffset: { width: 3, height:3 },
    textShadowRadius: 1,
},
textoEscrbir:{
    fontSize:30,
    textAlign:'left',
    fontWeight:'bold',
},
//pantalla lector tarjeta
container: {
    flex: 1,
    backgroundColor: Colors.lightGreen,
},
containerCentrado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
textoTitulo:{
    fontSize: 40,
    color: Colors.white,
    fontWeight: 'bold',
    alignSelf:'center'
  },
 
textoBody: {
    fontSize: 40,
    color: Colors.white,
    fontWeight: 'bold',
    textShadowColor: Colors.black,
    textShadowOffset: { width: 3, height:3 },
    textShadowRadius: 1,
},
//pantalla bbdd

contenedorBuscarBBDD:{
    display:'flex',
    width:'80%',
    position:'fixed',
    top:'7%',
},
textoTituloBBDD:{
    fontSize:50,
    alignSelf:'center',
    fontWeight:'bold',
    color:Colors.white,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 3, height:3 },
    textShadowRadius: 1,
    marginBottom:40
},
inputBBDD: {
    borderRadius: 25,
    borderWidth:2,
    borderColor:Colors.darkGreen,
    padding: 13,
    fontSize: 30,
    marginBottom: 10,
    width:'100%',
    height: 70,
    backgroundColor: Colors.white,
},
})
