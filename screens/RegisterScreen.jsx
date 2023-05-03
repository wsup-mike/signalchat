import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Button } from '@rneui/base'
import React, { useState } from 'react' // this component will create its own state
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = ({ navigation }) => {
    const [ fullName, setFullName] = useState('');

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}> 
            <StatusBar style='light' />
        <Text h3 style={{ marginBottom: 50 }}>Create a new Signal Account</Text>

        <View style={styles.inputContainer}>
            <Input 
                placeholder='Full Name' 
                autoFocus
                type="text"
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