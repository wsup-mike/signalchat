import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { goBack } from '@react-navigation/native'
import { Button, Input } from '@rneui/base'



const AddChatScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({ 
      title: 'Add a new Chat here!',
      headerLeft: () => {
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ marginLeft: 20 }}>
            <Text>Chats</Text>
          </View>
        </TouchableOpacity>
      },
    })
  }, [navigation])
  
  return (
    <View style={styles.container}>
      <Text>AddChat</Text>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
  container: {

  },
});