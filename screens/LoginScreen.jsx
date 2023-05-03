import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Image } from '@rneui/base'
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {

    }

    return (
        <View>
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

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {

    },

    button: {

    },
})


export default LoginScreen