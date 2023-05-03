import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';



const RegisterScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}> 
        <StatusBar style='light' />
      <Text>RegisterScreen</Text>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});