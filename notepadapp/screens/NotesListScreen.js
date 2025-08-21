// screens/NotesListScreen.js
import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function NotesListScreen({ navigation, notes }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.noteItem}
            onPress={() => navigation.navigate("Details", { noteId: item.id })}
          >
            <Text style={styles.title}>{item.title || "Untitled"}</Text>
            <Text style={styles.preview}>
              {item.body
                ? item.body.length > 30
                  ? item.body.substring(0, 30) + "..."
                  : item.body
                : ""}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No notes yet. Tap + Add Note</Text>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddEdit")}
      >
        <Text style={styles.addText}>+ Add Note</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  noteItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: { fontSize: 18, fontWeight: "bold" },
  preview: { fontSize: 14, color: "#666", marginTop: 4 },
  emptyText: { textAlign: "center", marginTop: 20, color: "#999" },
  addButton: {
    backgroundColor: "#007bff",
    padding: 14,
    marginTop: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  addText: { color: "#fff", fontWeight: "bold" },
});