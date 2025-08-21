// screens/AddEditNoteScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function AddEditNoteScreen({ route, navigation, notes, addNote, updateNote }) {
    const { noteId } = route.params || {};
    const existingNote = notes.find((n) => n.id === noteId);

    const [title, setTitle] = useState(existingNote ? existingNote.title : "");
    const [body, setBody] = useState(existingNote ? existingNote.body : "");

    const handleSave = () => {
        if (noteId) {
            updateNote(noteId, { title, body });
        } else {
            addNote({ title, body });
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
          <>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="Enter note title"
            />
      
            <Text style={styles.label}>Body</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={body}
              onChangeText={setBody}
              placeholder="Enter note content"
              multiline
            />
      
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </>
        </View>
      );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
    label: { fontSize: 16, marginBottom: 6, fontWeight: "bold" },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 10,
        marginBottom: 12,
        fontSize: 16,
    },
    textArea: {
        height: 120,
        textAlignVertical: "top",
    },
    saveButton: {
        backgroundColor: "#28a745",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
    },
    saveText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});