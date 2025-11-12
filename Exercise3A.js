// Exercise 3A
import React from "react";
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,

    },
    child: {
        flex: 1,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24
    }
});


const Exercise3A = () => {
    return (
        <View style={[styles.parent, {marginTop: 30}]}>
            <Text style={[styles.child, {backgroundColor: 'powderblue'}]}>Child One</Text>
            <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
            <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>Child Three</Text>
        </View>
    );
};

export default Exercise3A;

