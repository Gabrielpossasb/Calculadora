import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, StyleSheet, Button, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import Botao from './Botao';
import { TouchableOpacity } from 'react-native-web';


/*
adicionar "." no lado esquerdo do 9, 
o'=' no direito, 
e o botao de 'apagar'(icon) no lugar do '='
digitar com o teclado
historico

*/


export default function App() {

  const [firstNumb, setFirstNumb] = useState(0);
  const [secondNumb, setSecondNumb] = useState(0);
  const [sinal, setSinal] = useState('');

  const [stringCalculo, setStringCalculo] = useState('0');

  var numeros = [9,8,7,6,5,4,3,2,1,'.',0,'='];

  var sinais = ['+','-','x','/','Ce'];


  function logicaCalculadora(n){
    if(sinal == ''){
      setFirstNumb(parseInt(firstNumb.toString() + n.toString()));
      setStringCalculo(parseInt(firstNumb.toString() + n.toString()));
    }
    
    if((n =='/' || n =='x' || n =='+' || n =='-') && secondNumb == 0){
      setStringCalculo(firstNumb.toString() + n);
      setSinal(n);
    }

    if(sinal != ''){
      setSecondNumb(parseInt(secondNumb.toString() + n.toString()));
      setStringCalculo(firstNumb + sinal + parseInt(secondNumb.toString() + n.toString()));
    }

    if(n =='='){
      let resultado =0;
      if(sinal =='+'){
        resultado = firstNumb + secondNumb;
      }else if(sinal =='-'){
        resultado = firstNumb - secondNumb;
      }else if(sinal =='/'){
        resultado = firstNumb / secondNumb;
      }else if(sinal =='x'){
        resultado = firstNumb * secondNumb;
      }
      setStringCalculo(resultado);
      setSinal('');
      setFirstNumb(resultado);
      setSecondNumb(0);
    }

    if(n =='Ce'){
      setStringCalculo('0');
      setSinal('');
      setFirstNumb(0);
      setSecondNumb(0);
    }
  }

  function reset(){
    setStringCalculo('0');
    setSinal('');
    setFirstNumb(0);
    setSecondNumb(0);
  }

  return (
    <View style={styles.container}>
      <StatusBar auto />
      
      <View style={styles.display}>
        <Text style={{fontSize:24, color:'white', marginLeft:'5%'}}>{stringCalculo}</Text>
      </View>

      <View style={{flexDirection:'row',height:'8%',alignItems:'center'}}>
        {
        sinais.map(function(e){
          return(
            <TouchableOpacity onPress={()=>logicaCalculadora(e)} style={styles.bntSinais}> 
              <Text style={{fontSize:24,color:'white'}}>{e}</Text> 
            </TouchableOpacity>
          );
        })
        }
      </View>

      <View style={{flexDirection:'row',flexWrap:'wrap',borderTopColor:'black',borderTopWidth:2,height:'66.8%'}}>
        {
        numeros.map(function(e){
          return(
            <Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>
          );
        })
        }      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  display: {
    backgroundColor:'rgb(20,20,20)',
    height:'14%',
    width:'100%',
    justifyContent:'center',
    borderBottomColor:'black',
    borderWidth:1 ,
  },
  bntSinais: {
    width:'20%',
    backgroundColor:'rgb(20,20,20)',
    justifyContent:'center',
    alignItems:'center',
    borderBottomColor:'black',
    borderWidth:1 ,
    height:'100%'
  },
});
