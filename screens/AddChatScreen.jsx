import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Button, Input } from '@rneui/base'
import { Entypo } from '@expo/vector-icons'
import { db } from '../firebase'
import { addDoc, collection} from 'firebase/firestore'

const AddChatScreen = ({ navigation }) => {

  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({ 
      title: 'Add a new Chat',
      headerBackTitle: 'Chats',
    })
  }, [navigation]
  )

  const createChat = async () => {
    try {
      const docRef = await addDoc(collection(db, 'chats'),    { chatName: input });
      console.log(`Document written with ID: ${docRef.id}`)
      navigation.goBack()
    } catch (error) {
      () => alert.error
    }
  }
  



  return (
    <View style={styles.container}>
      <Input 
        placeholder='Enter a chat name'
        value={input}
        onChangeText={(text) => setInput(text)} //Now you should be able to type into box fields
        leftIcon={
          <Entypo
            name='chat' 
            size={24}
            color='black'
          />
        }
      />
      <Button 
        onPress={createChat}
        title="Create new chat"
      />
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
  container: {

  },
});