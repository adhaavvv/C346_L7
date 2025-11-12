// Exercise 3D
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


const Exercise3C = () => {
    return (
        <View style={[styles.parent, {marginTop: 30}]}>
            <Text style={[styles.child, {backgroundColor: 'powderblue', flex: 1}]}>Child One</Text>
            <Text style={[styles.child, {backgroundColor: 'skyblue', flex: 2}]}>Child Two</Text>
            <Text style={[styles.child, {backgroundColor: 'steelblue', flex: 3}]}>Child Three</Text>
        </View>
    );
};

export default Exercise3C;

