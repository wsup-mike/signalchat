import { 
    View, 
    Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, StyleSheet, ScrollView, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react';
import { Avatar } from '@rneui/base';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import { db, auth } from '../firebase'
import { collection, addDoc, serverTimestamp, orderBy, onSnapshot } from 'firebase/firestore';
import { query } from 'firebase/firestore';



const ChatScreen = ({ navigation, route }) => {
    const [textInput, setTextInput] = useState('');   
    const [messages, setMessages] = useState([]);

    // Will set up this customized header at top with avatar, chat name, icons
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

    // Will add a new message object to 'messages' when invoked
    const sendMessage = async () => { // Using addDoc method
        Keyboard.dismiss();
        
        // To refer to the 'messages' collection/section at our Firestore database (Ref location!)
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

    // Will refresh the 'messages' state with the most current version of 'messages' by the time this screen mounts. Will create 'listener' on an ordered object 'messages' collection. On this ordered object, a listener 'listener' is applied. Here's what happens: The moment a CHANGE occurs, the 'listner' will take a 'snapshot' of the ENTIRE COLLECTION (New edits incl!). Then listner will set new state using setMessages using the entire 'snapshot'. It will re-create a new array from mapping over the elements (docs) in the snapshot, grabbing each doc.id and doc.data and this final array will be set to new state 'messages'.  Done, now the listner is removed, then unsubscribe is removed. And this useEffectLayout will depend on the react navigation 'route' object. The current route is always monitored (i.e. the user's current screen). MOre specifivally it will invoke when 'route.params.id' changes (i.e. this refers to a very SPECIFIC chat group!). The messages located within the object pointed at route.params.id is what will be retrieved and updated.
    useEffect(() => {
        const unsubscribe = () => {
            const messagesLocation = collection(db, 'chats', route.params.id, 'messages')
            const returnedMessage = query(messagesLocation, orderBy('timestamp', 'desc'));
            // console.log(returnedMessage)
            const listener = onSnapshot(returnedMessage, (snapshot) => {
                // console.log(snapshot.docs)
                setMessages(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data() //Converts FDF to plain JavaScript object
                })))
            })
            return listener;
        }
        return unsubscribe;
    }, [route]);    


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
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <React.Fragment>
                        <ScrollView>
                        {/* {messages.map(({ id, data }) => (
                            data.email === auth.currentUser.email ? (
                                <View key={id} style={styles.receiver}>
                                    <Avatar />
                                    <Text style={styles.receiverText}>{data.message}</Text>
                                </View>
                            ) : (
                                <View key={id} style={styles.sender}>
                                    <Avatar />
                                    <Text style={styles.senderText}>{data.message}</Text>
                                </View>
                            )
                        ))} */}
                        
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
                    </React.Fragment>
                </TouchableWithoutFeedback>
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
        padding: 15,
        backgroundColor: '#ececec',
        alignSelf: 'flex-end',
        borderRadius: 20,
        marginRight: 15,
        marginBottom: 20,
        maxWidth: '80%',
        position: 'relative',
    },

    receiverText: {

    },

    sender: {
        padding: 15,
        backgroundColor: '#2b68e6',
        alignSelf: 'flex-start',
        borderRadius: 20,
        margin: 15,
        maxWidth: '80%',
        position: 'relative',
    },
    senderText: {

    },
});