import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem'


const HomeScreen = ({ navigation }) => {

  useLayoutEffect(() => {

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

