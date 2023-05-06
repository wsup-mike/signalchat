import React, { useState } from 'react' // this RegisterScreen component will create its own state
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Button, Text } from '@rneui/base'
import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';



const RegisterScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login"
        })
    }, [navigation]);

    
    
    // const register = () => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const user = userCredential.user;

    //             //Update the user's displayName and photoURL fields
    //             user.updateProfile({
    //                 displayName: fullName,
    //                 photoURL: imageUrl || '../assets/stockcprofilepic.jpg',
    //             })
    //             .then(() => {
    //             //Account created with updated profile

    //             })
    //             .catch((error) => alert(error.message)); //Error updating profile
    //     })
    //     .catch((error) => alert(error.message));
    // };

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}> 
            <StatusBar style='light' />
            <Text h3 style={{ marginBottom: 50 }}>Create a Signal Account</Text>

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
                    value={email} //to 'map' this value to the state email
                    onChangeText={text => setEmail(text)} // then add setEmail (Now you can type in Input field!)
                />
                <Input 
                    placeholder='Password' 
                    type="text"
                    secureTextEntry
                    value={password} //to 'map' this value to the state password
                    onChangeText={text => setPassword(text)} // then add setPasswrod (Now you can type in Input field!)
                />
                <Input 
                    placeholder='Profile Pic URL (optional)' 
                    type="text"
                    value={imageUrl} //to 'map' this value to the state imageUrl
                    onChangeText={text => setImageUrl(text)} // then add setImageUrl (Now you can type in Input field!)
                    onSubmitEditing={register} // Cool trick-when done editing and user taps 'return', the 'register' helper will trigger!
                />
            </View>

            <Button // This button too will also trigger the 'register' function
                title="Register"
                onPress={register}
                raised // makes it appear raised (shadow effect beneath)
                containerStyle={styles.button}
            />
            {/* Spacing trick */}
            <View style={{ height: 100 }}/>
            
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

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
        width: 200,
        marginTop: 10,

    },
});