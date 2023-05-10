import { View, Text } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react';
import { Avatar } from '@rneui/base';

const ChatScreen = ({ navigation, route }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chat',
            headerBackTitleVisible: false, //ios only
            headerTitleAlign: 'left',
            headerTitle: () => (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Avatar rounded  />
                    <Text>{route.params.chatName}</Text>
                </View>
            )
        })
    }, [navigation])

    return (
        <View>
        <Text>{route.params.chatName}</Text>
        </View>
    )
}

export default ChatScreen