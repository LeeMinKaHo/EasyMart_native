import { Pressable, TextInput, View, Text, StyleSheet } from "react-native";

export default function LoginScreen() {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Login</Text>

         <TextInput
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