import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Input, Image } from '@rneui/base'
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
  return (
    <View>
        <StatusBar style='light' />
        <Image 
            source={require('../assets/signallogo.jpg')}
            style={{ width: 200, height: 200 }}
        />
      <View style={styles.inputContainer}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {

    }
})


export default LoginScreen