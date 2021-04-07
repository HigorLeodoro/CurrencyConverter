import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import api from '../services/api';

// > convert?q=USD_PHP&compact=ultra&apiKey=c1c90191c2ae89e7113c

class Converter extends Component{ 

    constructor(props){
        super(props);
        this.state={
          moedaA: props.moedaA,
          moedaB: props.moedaB,
          moedaB_valor: 0,
          valorConvetido: 0
        };

        this.converter = this.converter.bind(this);
    }

    async converter(){
        let de_para = this.state.moedaA + '_' + this.state.moedaB;

        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=c1c90191c2ae89e7113c`);
        console.log(response.data)

        let cotacao = response.data[de_para]
        
        let resultado = (cotacao * parseFloat(this.state.moedaB_valor));
        
        this.setState({
            valorConvetido: resultado.toFixed(2)
        })

        //fechar teclado automaticamente
        Keyboard.dismiss();
    }

    render(){
       const { moedaA, moedaB } = this.props
       return(

        <View style={styles.container}>

            <Text style={styles.titulo} > { moedaA } para { moedaB } </Text>

            <TextInput
            placeholder="Valor a ser convertido"
            style={styles.areaInput}
            onChangeText={ (moedaB_valor) => this.setState ({ moedaB_valor }) } // ES6 don't need repeat the state ({moedaB_valor: moedaB_valor })
            keyboardType="numeric"
            />

            <TouchableOpacity style={styles.botaoArea} onPress={this.converter} >
                <Text style={styles.botaoTexto} >Coverter</Text>
            </TouchableOpacity>

            <Text style={styles.valorConvetido}>
                {(this.state.valorConvetido === 0) ? '' : this.state.valorConvetido }
            </Text>

        </View>

      );
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent: 'center',
       alignItems: 'center' 
   }, 
   titulo:{
       fontSize: 30,
       fontWeight: 'bold',
       color: "#000"
   },
   areaInput:{
       width: 280,
       height: 45,
       backgroundColor: "#ccc",
       textAlign: 'center',
       marginTop: 15,
       fontSize: 20,
       color: "#000",
       borderRadius: 5
   },
   botaoArea:{
       width: 150,
       height: 45,
       backgroundColor: "#ff0000",
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 15
   },
   botaoTexto:{
       fontSize: 17,
       fontWeight: 'bold',
       color: "#fff"
   },
   valorConvetido:{
       fontSize: 30,
       fontWeight: 'bold',
       color: "#000",
       marginTop: 15
   }
})

export default Converter;