import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Button, Input } from '@rneui/base'


const AddChatScreen = ({ navigation }) => {

  const BackButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>Chats</Text>
      </View>
    </TouchableOpacity>
  );
  

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new Chat',
      
      
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