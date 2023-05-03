import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// Firebase-Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Firebase-TODO: Add SDKs for Firebase products that you want to use
// Firebase-https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi3nH7srxwJbmEeo6DQNl2R2m8psPVuQI",
  authDomain: "signalchat-9ec52.firebaseapp.com",
  projectId: "signalchat-9ec52",
  storageBucket: "signalchat-9ec52.appspot.com",
  messagingSenderId: "818485681140",
  appId: "1:818485681140:web:9869ab4587c6e2d39d37a1",
  measurementId: "G-1K3GMHKFTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
