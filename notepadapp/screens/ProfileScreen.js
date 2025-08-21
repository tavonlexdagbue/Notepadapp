// screens/ProfileScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
    return ( <View style = { styles.container } >
        <Text style = { styles.name } > Anthonia Dagbue </Text> 
        <Text style = { styles.text } > Built
        for interview test </Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center" },
    name: { fontSize: 24, fontWeight: "bold" },
    text: { fontSize: 16, color: "#666", marginTop: 8 },
});