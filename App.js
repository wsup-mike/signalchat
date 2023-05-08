import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Firebase-Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Firebase-TODO: Add SDKs for Firebase products that you want to use
// Firebase-https://firebase.google.com/docs/web/setup#available-libraries
import { firebaseConfig } from "./firebase";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AddChatScreen from "./screens/AddChatScreen";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2c6bed" }, // header bg will be blue (Signal!)
  headerTitleStyle: { color: "white" }, // to style the title itself white
  headerTintColor: "white", //any icons placed in header will be white!
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "This is the Home Screen",
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login Here!" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Register Your Info Here!" }}
        />
        <Stack.Screen
          name="AddChat"
          component={AddChatScreen}
          options={{ title: "Begin new chat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
