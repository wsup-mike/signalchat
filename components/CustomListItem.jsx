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
    </ListItem>
  )
}

export default CustomListItem

