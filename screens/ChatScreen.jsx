import { View, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useLayoutEffect } from 'react';
import { Avatar } from '@rneui/base';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';


const ChatScreen = ({ navigation, route }) => {
    const [textInput, setTextInput] = useState('');   

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chat',
            headerBackTitleVisible: false, //ios only
            headerTitleAlign: 'left',
            headerTitle: () => (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Avatar 
                        rounded  
                        source={{
                            uri: 'https://picsum.photos/200/300.jpg'
                        }}
                    /> 
                    <Text style={{ color: 'white', marginLeft: 10, fontWeight: '700'}}>{route.params.chatName}</Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={navigation.goBack}
                >
                    <AntDesign name='arrowleft' color='white' size={24}/>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={{ 
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 70,
                    

                }}>
                    <TouchableOpacity>
                        <FontAwesome name='video-camera' size={24} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='call' size={24} color='white' />
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [navigation])

    const sendMessage = () => {
        
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <StatusBar style='light'/>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={90}
            >
                <> 
                    <ScrollView>
                        {/* Chat goes here */}
                    </ScrollView>
                    <View style={styles.footer}>
                        {/* Keyboard input text box */}
                        <TextInput 
                            placeholder='Enter your message'
                            value={textInput}
                            onChangeText={text => setTextInput(text)}
                        />
                        <TouchableOpacity onPress={sendMessage}>

                        </TouchableOpacity>
                    </View>
                </>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {

    },
    footer: {

    },
    textInput: {

    }
});