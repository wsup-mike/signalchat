import { View, Text } from 'react-native'
import React from 'react'
import { ListItem, Avatar } from '@rneui/base'

const CustomListItem = () => {
  return (
    <ListItem>
        <Avatar 
            rounded
            source={{
                uri: require('../assets/stockprofilepic.jpg'),
            }}
            size={'small'}
        />
        <ListItem.Content>
            <ListItem.Title style={{ fontWeight: '800'}}>
                YouTube Chat
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'> 
                Here is a test subtitle! Here is a test subtitle! Here is a test subtitle!
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

