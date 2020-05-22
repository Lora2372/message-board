import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
  return (
    <ImageBackground source={require('../assets/homeBackground.jpg')} style={globalStyles.backgroundImage}>

      <View style={globalStyles.container}>
        <Card>
          <Text style={styles.author}>{navigation.getParam('author')}</Text>
          <Text style={styles.title}>{navigation.getParam('title')}</Text>
          <Text style={styles.body}>{navigation.getParam('body')}</Text>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  author: {
    padding: 5,
    fontSize: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    fontWeight: 'bold',
  },
  body: {
    padding: 5,
  }
});