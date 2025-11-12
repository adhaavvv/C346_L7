// Exercise 2
import React from "react";
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderWidth: 1,

    },
    boxText: {
        textAlign: 'center',
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
    },
});


const Exercise2 = () => {
    return (
        <View style={{marginTop: 30}}>
            <View style={styles.greenBox}>
                <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={[styles.boxText]}>Our People</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={[styles.boxText]}>Our Campus</Text>
            </View>
        </View>
    );
};

export default Exercise2;

