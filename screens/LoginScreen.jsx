import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Image } from '@rneui/base'
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
            <StatusBar style='light' />
            <Image 
                source={require('../assets/signallogo.jpg')}
                style={{ width: 200, height: 200 }}
            />
            {/* Email Fields */}
            <View style={styles.inputContainer}>
                <Input 
                    placeholder='Email'
                    autoFocus
                    type="email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Input 
                    placeholder='Password'
                    type="password"
                    secureTextEntry //hides user input
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            {/* Login Button */}
            <Button title="Login" containerStyle={styles.button} />

            {/* Register Button */}
            <Button title="Register" type='outline' containerStyle={styles.button} />
            
            {/* Special fix to debug common issue where this keyboard smushes flush right below lowest element */}
            <View style={{ height: 150 }} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',

    },

    inputContainer: {

    },

    button: {

    },
})


export default LoginScreen