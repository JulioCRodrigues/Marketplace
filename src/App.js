import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  title:{
    fontSize: 24,
    textAlign: 'center',
    margin: 10

  }
})

export default function App(){

  return(
    <View style={style.container}>
        <Text style={style.title}>Hello, Ok!</Text>
    </View>
  )
}

