import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';

const PostSchema = yup.object({
    author: yup.string()
        .required()
        .min(2),
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(4)
});

export default function NewPost({ addPost }) {

    return (
        <ImageBackground source={require('../assets/homeBackground.jpg')} style={globalStyles.backgroundImage}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.container}>
                    <Formik
                        initialValues={{ author: '', title: '', body: '' }}
                        validationSchema={PostSchema}
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
                                    onBlur={props.handleBlur('author')}
                                />
                                <Text style={globalStyles.errorText}>{props.touched.author && props.errors.author}</Text>

                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Title'
                                    onChangeText={props.handleChange('title')}
                                    value={props.values.title}
                                    onBlur={props.handleBlur('title')}
                                />
                                <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                                <TextInput
                                    style={globalStyles.input}
                                    multiline
                                    placeholder='Heartwarming story!'
                                    onChangeText={props.handleChange('body')}
                                    value={props.values.body}
                                    onBlur={props.handleBlur('body')}
                                />
                                <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                                <Button color='maroon' title="Post" onPress={props.handleSubmit} />
                            </View>
                        )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
}

