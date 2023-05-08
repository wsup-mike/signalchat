import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal', // the header title
      headerStyle: { backgroundColor: "#fff"}, //make header bgcolor white
      headerTitleStyle: { color: "black"}, // make title color black
      headerTintColor: "black", //make any image logos here black
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

