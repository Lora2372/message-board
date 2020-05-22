import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';

export default function NewPost({ addPost }) {

    return (
        <ImageBackground source={require('../assets/homeBackground.jpg')} style={globalStyles.backgroundImage}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.container}>
                    <Formik
                        initialValues={{ author: '', title: '', body: '' }}
                        onSubmit={(values) => {
                            addPost(values);
                        }}
                    >
                        {props => (
                            <View>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Author name'
                                    onChangeText={props.handleChange('author')}
                                    value={props.values.author}
                                />

                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Title'
                                    onChangeText={props.handleChange('title')}
                                    value={props.values.title}
                                />

                                <TextInput
                                    style={globalStyles.input}
                                    multiline
                                    placeholder='Heartwarming story!'
                                    onChangeText={props.handleChange('body')}
                                    value={props.values.body}
                                />

                                <Button color='maroon' title="Post" onPress={props.handleSubmit} />
                            </View>
                        )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
}

