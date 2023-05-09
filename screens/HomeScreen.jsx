import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomListItem from '../components/CustomListItem'
import { StackActions, useNavigation } from '@react-navigation/native'
import { Avatar } from '@rneui/base'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import { auth } from '../firebase';
import { db } from '../firebase'
import { addDoc, collection, doc, onSnapshot} from 'firebase/firestore'

const HomeScreen = () => {
  const [chats, setChats] = useState([]); // an empty array
  
  const navigation = useNavigation();

  const signOut = () => {
    auth.signOut().then(() => {
      navigation.dispatch(
        StackActions.replace('Login')
      )
    })
  }

  useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot(snapshot => {
      setChats(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    return unsubscribe;
  }, [])

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
          <View style={{ 
            flexDirection: 'row',  
            marginRight: 10,
            width: 70,
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: 'blue'
          }}> 
            <TouchableOpacity>
              <AntDesign 
                name='camerao'
                size={24}
                color='black'
              />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate('AddChat')}
            >
              <SimpleLineIcons 
                name='pencil'
                size={24}
                color='black'
              />
            </TouchableOpacity>
          </View>
        )
      },
    })
  }, [navigation])

  return (
    <SafeAreaView>
      <ScrollView>
        {chats.map(({ id, data: { chatName }}) => (
          <CustomListItem 
            key={id}
            id={id}
            chatName={chatName}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

