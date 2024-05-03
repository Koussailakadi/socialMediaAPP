import { StyleSheet } from "react-native";
export default GlobalStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    //HOME:
    imageBackGroundHome:{
      justifyContent:'flex-end',
      alignContent:'flex-end',
      width:'100%',
      height: 350,
      overflow: 'hidden',
      backgroundColor:'red',
      alignSelf:'center',
    },
    textHome:{
      backgroundColor:'rgba(0 , 0, 0, 0.5)',
      fontSize:20, 
      textAlign:'center', 
      color:'white',
    },
    //PROFILE:
    imageProfile:{
      width:150, 
      height:150, 
      borderRadius:100, 
      borderWidth:5,
      borderColor:'white',
      overflow:'hidden'
    },
    imageBackGroundProfile:{
      justifyContent:'flex-end',
      alignContent:'flex-end',
      width:'100%',
      height:350,
    },
    textProfile:{
      color:'white',
      backgroundColor:'rgba(0, 0, 0, 0.5)',
      padding: 10,
      fontSize:20 ,
      textAlign:'center',
    }
  });