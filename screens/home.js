import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
  const [posts, setPosts] = useState([
    { key: '1', title: 'Public Health England Approves Antibody Test ', author: 'John', body: 'On Thursday (May 14), it was announced that Public Health England had approved its first antibodies test, which could detect if people had already had the Coronavirus and therefore could suggest if they are now immune to it. According to the BBC, the test would first be given to health and social care workers.' },
    { key: '2', title: 'Countries Easing Restrictions', author: 'Esmarelda', body: 'After successful periods of social distancing measures, some countries have started easing their lockdown restrictions. To kick off this week, New Zealand announced that there had been no more local transmissions of Covid-19, meaning some non-essential businesses, healthcare and education can resume after a month of strict lockdown. Many people are still required to stay at home. The picture above shows Kiwi pro surfing champion Ava Henderson returning to the sea. In Spain, children have been allowed outside for walks for the first time in weeks and in China some have returned to school.'},
    { key: '3', title: 'UK Coronavirus Vaccine Trials Get Underway', author: 'Reylah', body: 'Today (23 April), the first human trials of a potential Covid-19 vaccine get underway from the University of Oxford. Scientists working on the vaccine say the injection they are developing has an 80% chance of success reports Sky News.'}
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList data={posts} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ViewPost', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </Card>
        </TouchableOpacity>
      )} />
      <Button title='New post!' />
    </View>

  );
}