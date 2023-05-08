import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Button, Input } from '@rneui/base'

const AddChatScreen = ({ navigation }) => {

  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({ 
      title: 'Add a new Chat',
      headerBackTitle: 'Chats',
    })
  }, [navigation]
  )
  
  return (
    <View style={styles.container}>
      <Input 
        placeholder='Enter a chat name'
        value={input}
        onChangeText={(text) => setInput(text)} //Now you should be able to type into box fields
      />
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
  container: {

  },
});