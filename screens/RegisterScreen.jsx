import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Button } from '@rneui/base'
import React from 'react'
import { StatusBar } from 'expo-status-bar';



const RegisterScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}> 
        <StatusBar style='light' />
      <Text h3 style={{ marginBottom: 50 }}>Create a new Signal Account</Text>

      <View style={styles.inputContainer}>
        <Input 
            placeholder='Full Name'
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    inputContainer: {

    }
});