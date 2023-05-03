import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Button } from '@rneui/base'
import React, { useState } from 'react' // this component will create its own state
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}> 
            <StatusBar style='light' />
        <Text h3 style={{ marginBottom: 50 }}>Create a new Signal Account</Text>

        <View style={styles.inputContainer}>
            <Input 
                placeholder='Full Name' 
                autoFocus
                type="text"
                value={fullName} //to 'map' this value to the state fullName
                onChangeText={text => setFullName(text)} // then add setFullName (Now you can type in Input field!)
            />
            <Input 
                placeholder='Email' 
                type="email"
                value={email} //to 'map' this value to the state fullName
                onChangeText={text => setEmail(text)} // then add setFullName (Now you can type in Input field!)
            />
            <Input 
                placeholder='Password' 
                type="text"
                secureTextEntry
                value={password} //to 'map' this value to the state fullName
                onChangeText={text => setPassword(text)} // then add setFullName (Now you can type in Input field!)
            />
            <Input 
                placeholder='Profile Pic URL (Optional)' 
                type="text"
                secureTextEntry
                value={imageUrl} //to 'map' this value to the state fullName
                onChangeText={text => setImageUrl(text)} // then add setFullName (Now you can type in Input field!)
            />
        </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    inputContainer: {

    }
});