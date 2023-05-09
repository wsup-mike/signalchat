import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomListItem from '../components/CustomListItem'
import { StackActions, useNavigation } from '@react-navigation/native'
import { Avatar } from '@rneui/base'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import { auth, db } from '../firebase';
import { collection, doc, onSnapshot} from 'firebase/firestore'

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
    console.log("unsubscribe is:", unsubscribe); // add this line
    return unsubscribe; // removing an event listener prevents 'memory leaks'
  }, [])

  // useEffect(() => {
  //   const dbObject = db.toJSON()
  //   console.log(dbObject)

  // }, []);

  // We have a Firestore db named 'chats' which is saved as an 'array'
  //This useEffect sets up a 'listener' on our 'chats' array
  // A 'listener' in essence makes a 'query' and an 'object' is returned
  // .onSnapshot is the listener: when changes are detected on 'chats', this retrieves and returns a 'snapshot' of the array
  // Then the 'snapshot' of the updated data is taken and set to the new state of 'chats', using setChats
  // The following is saved to 'chats': It's gonna be a newly created 'array' | the 'docs' is a newly converted plain javascript array version of the 'snapshot' (so we can extract the properties of each doc: 'id' and 'data') | each element in 'docs' snapshot is mapped over 1 'doc' element at a time | Each 'docs' element in snapshot.docs array becomes a new element in our 'chats' state array | each new element will have a key value pair of: id-doc.id and data-doc.data() | doc.data() is a method to retrieve all fields n values stored in a document in the form of an object
  // Now the updated data in 'snapshot' becomes the new state of 'chats'
  // Ultimately, every time this screen 'mounts' it will run the useEffect to check if any data in the database changed and to dynmically make updaes to the 'chats' state


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

