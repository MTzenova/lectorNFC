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
},
textoEscrbir:{
    fontSize:30,
    textAlign:'left',
    fontWeight:'bold',
},
//carlos
container: {
    flex: 1,
    backgroundColor: Colors.white,
    
},
containerCentrado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: Colors.light.background,
},
containerInfo: {
    alignSelf: 'center',
    //backgroundColor: Colors.light.text, 
    width: '80%', 
    height: '60%',
    borderRadius: 8, 
    paddingHorizontal: 16,   
    marginEnd: '10%'     
  },
  seccionesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    //backgroundColor: Colors.light.header,
    marginTop: 20,
    
  },
  icon:{
    //color: Colors.light.icon,    
  },
  textoTitulo:{
    fontSize: 20,
    //color: Colors.light.text,
    fontWeight: 'bold',
    
  },
 
  textoBody: {
    fontSize: 20,
    //color: Colors.light.text,
    fontWeight: 'bold',
    //textShadowColor: 'black',
    //textShadowOffset: { width: 1, height: 1 },
    //textShadowRadius: 1,
  },

  inputTexto:{height: 50,
    alignSelf: 'center',
    width: "100%",
    //borderColor: Colors.light.negro,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 10,
    //backgroundColor: Colors.light.text,
    marginBottom: 5,
    marginTop: 25,
},

imagenPerfil:{
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 20,
},
})
