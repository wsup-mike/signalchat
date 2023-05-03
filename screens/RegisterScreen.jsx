import { View, Text, KeyboardAvoidingView, StyleSheet, Input } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';



const RegisterScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}> 
        <StatusBar style='light' />
      <Text h3 style={{ marginBottom: 50 }}>Create a new Signal Account</Text>

      <View>
        <Input />
      </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});