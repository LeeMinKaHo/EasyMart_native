import { TextInput, StyleSheet } from "react-native";

export default function Input(props: any) {
    return <TextInput {...props} className="font-inter" style={styles.input} />;
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#F5F4F5",
        padding: 16,
        borderRadius: 8,
        color: "#9D9FA1"
    }

});