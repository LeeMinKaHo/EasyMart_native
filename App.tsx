import React from "react";
import {
   FlatList,
   Pressable,
   StyleSheet,
   Text,
   TextInput,
   View,
} from "react-native";
import "./global.css"
import LoginScreen from "./screens/LoginScreen";
export default function App() {
  
   return (
      <View style={styles.container}>
        <LoginScreen />
         <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
   },
   title: {
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 20,
   },
   input: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 8,
      padding: 10,
      marginBottom: 20,
   },
   item: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15,
      padding: 15,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 8,
   },
   itemText: {
      fontSize: 16,
   },
   btn: {
      backgroundColor: "blue",
      padding: 10,
      borderRadius: 8,
      marginTop: 10,
      alignItems: "center",
   },
   btnText: {
      color: "white",
      fontWeight: "bold",
   },
});
