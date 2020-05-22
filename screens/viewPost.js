import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.author}>{navigation.getParam('author')}</Text>
        <Text style={styles.title}>{navigation.getParam('title')}</Text>
        <Text style={styles.body}>{navigation.getParam('body')}</Text>
      </Card>
    </View>
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