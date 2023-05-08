import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Button, Input } from '@rneui/base'


const AddChatScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new Chat',
      headerLeft: null,
      headerBackTitle: "Chats",
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