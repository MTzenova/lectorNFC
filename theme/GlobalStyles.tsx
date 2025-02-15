import { StyleSheet } from "react-native";
import { Colors } from "./Colors";


export const GlobalStyles =  StyleSheet.create({
//boton
boton:{
    width: '100%',
    height: 60,
    textAlign: 'center',
    padding:15,
    fontSize: 20,
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
    fontSize:20,
    textDecorationLine:'underline',
    fontWeight:'bold',
    color:Colors.white,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 3, height:3 },
    textShadowRadius: 1,
},
//barras
seccionesHeader: {
    backgroundColor: Colors.darkGreen,
    height:60,
},
seccionesFooter:{
    height: 60, //
    paddingBottom: 10,
},
fuenteFooter:{
    fontSize:18,
},
//pantalla login
contenedorCabeceraLogin:{
    display:'flex',
    backgroundColor:Colors.darkGreen,
    width:'100%',
    flexDirection:'row-reverse',
    position:'absolute',
    top:0,
    height:60
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
    paddingTop:'10%'
},
contendorInputLogin:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    marginLeft:15,
    marginRight:10,
    marginBottom:20,
    width:'90%',
},
textoTituloLogin:{
    fontSize:25,
    alignSelf:'center',
    fontWeight:'bold',
    color:Colors.white,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 3, height:3 },
    textShadowRadius: 1,
    width:'87%',
    marginLeft:'2%'
},
inputLogin: {
    borderRadius: 25,
    borderWidth:2,
    borderColor:Colors.darkGreen,
    padding: 13,
    fontSize:18,
    marginBottom: 10,
    width:'100%',
    height: 60,
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
    marginBottom:'3%',
},
contendorInput:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:20,
    marginRight:20,
    marginBottom:10,
},
contenedorNTarjeta:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20,
    marginRight:60,
    marginBottom:10,
},
imagenUsuario:{
    width:90,
    height:90,
    alignSelf:'center',
    marginBottom:10,
    marginTop:10,
},
input: {
    borderRadius: 25,
    borderWidth:2,
    borderColor:Colors.darkGreen,
    padding: 10,
    fontSize: 18,
    width:'60%',
    height: 50,
    backgroundColor: Colors.white,
},
textoInfo:{
    fontSize:25,
    alignSelf:'flex-start',
    fontWeight:'bold',
    color:Colors.white,
    marginLeft:40,
    marginTop:5,
    marginBottom:10,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 3, height:3 },
    textShadowRadius: 1,
},
textoEscrbir:{
    fontSize:20,
    textAlign:'left',
    fontWeight:'bold',
    marginLeft:10,
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
    fontSize: 25,
    color: Colors.white,
    fontWeight: 'bold',
    alignSelf:'center',
    textShadowOffset: { width: 3, height:3 },
    textShadowRadius: 1,
  },
 
textoBody: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: 'bold',
    textShadowColor: Colors.black,
    textShadowOffset: { width: 3, height:3 },
    textShadowRadius: 1,
    textAlign:'center'
},
//pantalla bbdd

contenedorBuscarBBDD:{
    display:'flex',
    width:'80%',
    position:'absolute',
    top:0
},
textoTituloBBDD:{
    fontSize:25,
    alignSelf:'center',
    fontWeight:'bold',
    color:Colors.white,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 3, height:3 },
    textShadowRadius: 1,
    marginBottom:10
},
inputBBDD: {
    borderRadius: 25,
    borderWidth:2,
    borderColor:Colors.darkGreen,
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
    width:'100%',
    height: 50,
    backgroundColor: Colors.white,
},
})
