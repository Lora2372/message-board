import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.card}>
            {/* <ImageBackground source={require('../assets/backgroundImage.jpg')} style={styles.card}> */}
            <View style={styles.cardContent}>
                {props.children}
            </View>
            {/* </ImageBackground> */ }
        </View>
    );
}

const styles = StyleSheet.create({
    card: {

        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
        color: '#fff',
    },

});