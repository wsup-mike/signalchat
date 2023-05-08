import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem'
import { StackActions, useNavigation } from '@react-navigation/native'
import { Avatar } from '@rneui/base'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import { auth } from '../firebase';


const HomeScreen = () => {

  const navigation = useNavigation();

  const signOut = () => {
    auth.signOut().then(() => {
      navigation.dispatch(
        StackActions.replace('Login')
      )
    })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal', // the header title
      headerStyle: { backgroundColor: "#fff"}, //make header bgcolor white
      headerTitleStyle: { color: "black"}, // make title color black
      headerTintColor: "black", //make any image logos here black
      headerLeft: () => { // We pass a COMPONENT here!
        return (
          <View style={{ marginLeft: 20 }}> 
            <TouchableOpacity onPress={signOut}>
              <Avatar 
                rounded
                source={{ uri: auth?.currentUser?.photoURL }} // if both user authenticated and photoURL submitted
                // source={{ uri: 'https://picsum.photos/200/300.jpg'}}
                size={'small'}
              />
            </TouchableOpacity>
          </View>
        )
      },
      headerRight: () => { // We pass a COMPONENT here!
        return (
          <View style={{ marginLeft: 20 }}> 
            <TouchableOpacity>
              <AntDesign 
                name='camerao'
                size={24}
                color='black'
              />
            </TouchableOpacity>
          </View>
        )
      },
    })
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

