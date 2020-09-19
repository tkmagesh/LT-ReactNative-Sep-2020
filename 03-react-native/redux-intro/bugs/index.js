import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import bugActions from './actions';

const styles = StyleSheet.create({
    constainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    count : {
        fontSize : 50
    }
})

const Bugs = (props) => {
    const bugs = useSelector(storeState => storeState.bugsState);
    const dispatch = useDispatch();

    const onLoadPress = () => {
        dispatch(bugActions.load());    
    }
    const onAddNewPress = () => {
        dispatch(bugActions.addNew('Dummy bug - 1'))
    }
    return (
      <View style={styles.constainer}>
        <Button title="Add New" onPress={onAddNewPress}></Button>
        <Button title="Load Bugs" onPress={onLoadPress}></Button>
        <Text style={styles.count}>[ {bugs.length} ]</Text>
      </View>
    );
}
export default Bugs;