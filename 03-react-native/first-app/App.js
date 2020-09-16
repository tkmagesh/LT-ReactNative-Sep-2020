import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* 
import * as calculator from './math';
console.log(calculator); 
*/

/* 
import * as calculator from './math';
  //const add = calculator.add; 
  const { add } = calculator.add;
*/

/* 
import { add } from './math'; 
*/

/* 
import calculator from './math'; 
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
