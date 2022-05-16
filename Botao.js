import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function Botao(props) {

    return(
      <View style={styles.tecladoNum}>
        <TouchableOpacity onPress={()=>props.logicaCalculadora(props.numero)} style={styles.bntNumero}>
          <Text style={{fontSize:24,color:'white'}}>{props.numero}</Text>
        </TouchableOpacity>
      </View>
    );

}

const styles = StyleSheet.create({
  tecladoNum: {
    backgroundColor:'black',
    borderColor:'white',
    borderWidth:1,
    width:'33.3%',
    height:'25%'
  },
  bntNumero: {
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  }
});