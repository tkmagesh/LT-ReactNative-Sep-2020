import React from "react";
import { useDispatch } from 'react-redux';
import spinnerActionCreators from './actions';

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
    flex: 2,
    backgroundColor: "#07121B",
    alignItems: "center",
    justifyContent: "center"
  },
  spinnerResultContainer : {
    flex : 1,
    backgroundColor: "#07121B",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: screenWidth / 4,
    height: screenWidth / 4,
    borderRadius: screenWidth / 4,
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
    
    const dispatch = useDispatch();
    const { increment, decrement } = spinnerActionCreators;

    const onIncrementPress = () => {
      const delta = 2;
      dispatch(increment(delta));
    };
    
    const onDecrementPress = () => {
      const delta = 5;
      dispatch(decrement(delta));
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onIncrementPress}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onDecrementPress}>
          <Text style={styles.buttonText}> - </Text>
        </TouchableOpacity>
      </View>
    );
}

export default Spinner;

