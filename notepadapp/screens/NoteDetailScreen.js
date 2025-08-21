
// screens/NoteDetailScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function NoteDetailScreen({ route, navigation, notes, deleteNote }) {
    const { noteId } = route.params;
    const note = notes.find((n) => n.id === noteId);
  
    if (!note) {
      return (
        <View style={styles.container}>
          <Text style={styles.notFound}>Note not found</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {note.title ? String(note.title) : "Untitled"}
        </Text>
  
        <Text style={styles.body}>
          {note.body ? String(note.body) : ""}
        </Text>
  
        {/* Edit */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("AddEdit", { noteId })}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
  
        {/* Delete */}
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            deleteNote(noteId);
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
    body: { fontSize: 16, marginBottom: 20 },
    notFound: { fontSize: 18, color: "red", textAlign: "center" },
    editButton: {
        backgroundColor: "#4CAF50",
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
    },
    deleteButton: {
        backgroundColor: "#F44336",
        padding: 12,
        borderRadius: 8,
    },
    buttonText: { color: "#fff", textAlign: "center", fontSize: 16 },
});