import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '@rneui/base'
import { auth } from '../firebase';


const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal', // the header title
      headerStyle: { backgroundColor: "#fff"}, //make header bgcolor white
      headerTitleStyle: { color: "black"}, // make title color black
      headerTintColor: "black", //make any image logos here black
      headerLeft: () => { // We pass a COMPONENT here!
        <View style={{ marginLeft: 20 }}> 
          <Avatar 
            rounded
            source={{ uri: auth?.currentUser?.photoURL }} // if both user authenticated and photoURL submitted
            // source={{ uri: 'https://picsum.photos/200/300.jpg'}}
            size={'small'}
          />
        </View>
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

