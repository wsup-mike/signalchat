import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, StackActions } from '@react-navigation/native';
import { Button, Input, Image } from '@rneui/base'
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'

const LoginScreen = () => { // passing down 'navigation' from StackScreen in app allows us this access to destrucutre it. Now no more need to import, useNavigation and cr8 the 'navigation' object
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userCredential) => {
            if (userCredential) {
                navigation.dispatch(
                    StackActions.replace("Home")
                );
            }
        });

        return unsubscribe;
    }, [navigation]);

        
    const signIn = () => {
        auth
            .signInWithEmailAndPassword(auth, email, password)
            .catch(error => alert(error));
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
                    onSubmitEditing={signIn}
                />
            </View>
            {/* Login Button */}
            <Button 
                title="Login" 
                containerStyle={styles.button} 
                onPress={signIn}
            />

            {/* Register Button */}
            <Button 
                title="Register" 
                type='outline' 
                containerStyle={styles.button} 
                onPress={() => navigation.navigate('Register')}
            />
            
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
        width: 300,

    },

    button: {
        width: 200, // button width
        marginTop: 10, // add spacing to tops of both buttons
    },
})


export default LoginScreen