import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { goBack } from '@react-navigation/native'
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
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
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