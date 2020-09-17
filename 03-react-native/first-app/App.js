import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StopWatch from './StopWatch';

export default function App(){
  return(
    <View style={styles.container}>
      <StopWatch/>
    </View>
  )
}

/* export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={[styles.text1, styles.text2]}>View 1</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.container21}></View>
        <View style={styles.container22}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
} */

/* const styles = {
  container: {
    flex: 1,
    backgroundcolor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
}; */

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column',
    backgroundColor : 'yellow'
  },
  container1 : {
    flex : 1,
    backgroundColor : 'blue',
    justifyContent : 'center',
    alignItems : 'center'
  },
  container2 : {
    flex : 2,
    backgroundColor : 'green',
    flexDirection : 'row'
  },
  container21:{
    flex : 1,
    backgroundColor : 'red'
  },
  container22 :{
    flex : 1,
    backgroundColor: 'orange'
  },
  text1 : {
    fontSize : 18
  },
  text2 : {
    color : 'white'
  }
});

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