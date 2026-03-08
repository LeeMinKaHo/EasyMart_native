import { Pressable, TextInput, View, Text, StyleSheet } from "react-native";
import { Image } from "react-native";
import Input from "../components/ui/Input";

export default function LoginScreen() {
   return (
      <View style={styles.container}>
         <View className="flex items-center justify-center bg-orange-50">
            <Image
               source={require("../assets/logo.png")}

            />
         </View>
         <Text className="text-3xl font-inter-bold mb-5 text-primary-900">Login</Text>

         <TextInput
            style={styles.input}
            placeholder="Email"
         />
         <Input
            style={styles.input}
            placeholder="Email"
         />
         <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
         />

         <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
         </Pressable>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      padding: 20
   },

   title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20
   },

   input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      borderRadius: 8,
      marginBottom: 12
   },

   btn: {
      backgroundColor: "blue",
      padding: 12,
      borderRadius: 8,
      alignItems: "center"
   },

   btnText: {
      color: "white",
      fontWeight: "bold"
   }
});