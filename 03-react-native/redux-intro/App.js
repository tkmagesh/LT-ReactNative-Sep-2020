import React from "react";
import { createStore } from 'redux';
import { useSelector, useDispatch, Provider } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform
} from "react-native";

const screen = Dimensions.get("window"),
  screenWidth = screen.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07121B",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: screenWidth / 2,
    height: screenWidth / 2,
    borderRadius: screenWidth / 2,
    borderColor: "#89AAFF",
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  buttonText: {
    color: "#89AAFF",
    fontSize: 30
  },
  buttonStop: {
    borderColor: "#FF851B"
  },
  buttonStopText: {
    color: "#FF851B"
  },
  timerText: {
    fontSize: 90,
    color: "#fff"
  },
  picker: {
    width: 50,
    ...Platform.select({
      android: {
        color: "#fff",
        backgroundColor: "#07121B",
        marginLeft: 10
      },
      ios: {}
    })
  },

  pickerItem: {
    color: "#fff",
    fontSize: 20
  },
  pickerLabel: {
    color: "#fff",
    fontSize: 20
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});


const Spinner = () => {
    const storeState = useSelector(state => state);
    const dispatch = useDispatch();

    const spinnerValue = storeState;
    
    const onIncrementPress = () => {
      const action = { type : 'INCREMENT'};
      dispatch(action);
    };
    
    const onDecrementPress = () => {
      const action = { type : 'DECREMENT'};
      dispatch(action);
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <TouchableOpacity style={styles.button} onPress={onIncrementPress}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>

        <Text style={styles.timerText}> [ {spinnerValue} ] </Text>
        <TouchableOpacity style={styles.button} onPress={onDecrementPress}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
    );
}


/* 
  inc action => { type : 'INCREMENT' }
  dec action => { type : 'DECREMENT' }
*/


function spinnerReducer(currentState = 50, action) {
  if (action.type === 'INCREMENT') return currentState + 1;
  if (action.type === 'DECREMENT') return currentState - 1;
  return currentState;
}

//creating the store
const appStore = createStore(spinnerReducer);


export default class App extends React.Component{
  render(){
    return (
      <Provider store={appStore}>
        <Spinner />
      </Provider>
    );
  }
}