import React, {Component} from 'react';
import { View, Text, StyleSheet, } from 'react-native';

import Converter from './src/Converter';

class App extends Component{ 
    render(){
      return(

        <View style={styles.container}>
          <Converter moedaA="USD" moedaB="BRL" />
        </View>

      );
    }
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});