import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const pressHandler = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackground source={require('../assets/backgroundImage.jpg')} style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={pressHandler} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart.png')} style={styles.headerImage}></Image>
                <Text style={styles.headerText}>{title}</Text>
                <Image source={require('../assets/heart.png')} style={styles.headerImage}></Image>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerImage: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
    },
    headerTitle: {
        flexDirection: 'row',
    }
})