import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '@rneui/base'


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
            source={ 
              require('../assets/stockprofilepic.jpg')
            }
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

