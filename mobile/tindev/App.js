import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default function app(){
   return (
    <View style={styles.container}>
   <Text style={styles.text}>A minha magrelinha é a belinha!!!!</Text>
   </View>
   )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#7159c1',
    justifyContent:'center',
    alignItems:'center',

  },
    text:{
      fontWeight:'bold',
      color:'#FFF',
      fontSize:20,
  }

})
