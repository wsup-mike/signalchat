import { 
    View, 
    Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, StyleSheet, ScrollView, TextInput, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react';
import { Avatar } from '@rneui/base';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import { db, auth } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebase from 'firebase/app'


const ChatScreen = ({ navigation, route }) => {
    const [textInput, setTextInput] = useState('');   
    const [messages, setMessages] = useState([]);

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


    const sendMessage = async () => { // Using addDoc method
        Keyboard.dismiss();
        
        // To refer to the 'messages' collection/section of our Firestore database
        const messagesRef = collection(db, 'chats', route.params.id, 'messages');

        //To add the data object specifically to the 'messages' section (as referenced by 'mesagesRef')
        await addDoc(messagesRef, {
            message: textInput,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            timestamp: serverTimestamp(), //Firestore has a new direct method to get this timestamp info!
        })

        setTextInput('');
    }

    useLayoutEffect(() => { // To set up a 'listener'. 'messages' will now be updated with ordered list of messages!
        const unsubscribe = () => {
          const messagesRef = collection(db, 'chats', route.params.id, 'messages');
          const query = query(messagesRef, orderBy('timestamp', 'desc'));
          const listener = onSnapshot(query, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
          });
          return listener;
        };
      
        return unsubscribe();
      }, [route]);  // dependent on the 'route'
      

    // const sendMessage = () => { // db.collection not an accessible method! Not sure why
    //     Keyboard.dismiss();

    //     db.collection('chats').doc(route.params.id).collection('messages').add({
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //         message: textInput,
    //         displayName: auth.currentUser.displayName,
    //         email: auth.currentUser.email,
    //         photoURL: auth.currentUser.photoURL,
    //     })

    //     setTextInput('');
    // }

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
                        {/* Chat goes here. */}
                        {/* We destructure the 'message' to get id, data */}
                        {/* At first the useLayoutEffect added some state to messages: a copy of the 'messages' collection. Here we will map thropugh the entire 'messages' collection. For each single message, selecting by 'id' and 'data', we will identify if this particular message's user 'email' matches the currentUser's 'email'! If so then we will display the appropriate logged in user's Avatar and their specific 'message' text. If the message's 'email' doestn match, then we will use the user's Avatar and 'message' instead */}
                        {messages.map(({ id, data }) => (
                            data.email === auth.currentUser.email ? (
                                <View>
                                    <Avatar />
                                    <Text></Text>
                                </View>
                            ) : (
                                <View>
                                    <Avatar />
                                    <Text></Text>
                                </View>
                            )
                        ))} 

                    </ScrollView>
                    <View style={styles.footer}>
                        {/* Keyboard input text box */}
                        <TextInput 
                            placeholder='Enter your message'
                            value={textInput}
                            onChangeText={text => setTextInput(text)}
                            style={styles.textInput}
                            onSubmitEditing={sendMessage}
                        />
                        <TouchableOpacity onPress={sendMessage}>
                            <Ionicons 
                                name='send'
                                size={24}
                                color='#2b68e6'
                            />
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
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
   
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        backgroundColor: '#ececec',
        padding: 10,
        color: 'grey',
        borderRadius: 30,
    },

    receiver: {

    },
});