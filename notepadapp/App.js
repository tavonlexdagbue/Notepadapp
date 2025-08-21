// App.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

// Screens
import NotesListScreen from "./screens/NotesListScreen";
import NoteDetailScreen from "./screens/NoteDetailScreen";
import AddEditNoteScreen from "./screens/AddEditNoteScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [notes, setNotes] = useState([]);

  // CRUD handlers
  const addNote = (note) =>
    setNotes((prev) => [...prev, { id: Date.now().toString(), ...note }]);

  const updateNote = (id, updated) =>
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, ...updated } : n)));

  const deleteNote = (id) =>
    setNotes((prev) => prev.filter((n) => n.id !== id));

  // Notes stack
  function NotesStack() {
    return (
      <Stack.Navigator initialRouteName="NotesList">
        <Stack.Screen
          name="NotesList"
          options={{ title: "My Notes" }} >
          {(props) => <NotesListScreen {...props} notes={notes} />}
        </Stack.Screen>

        <Stack.Screen
          name="Details"
          options={{ title: "Note Details" }} >
          {(props) => (
            <NoteDetailScreen
              {...props}
              notes={notes}
              deleteNote={deleteNote}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="AddEdit"
          options={{ title: "Add / Edit Note" }}>
          {(props) => (
            <AddEditNoteScreen
              {...props}
              notes={notes}
              addNote={addNote}
              updateNote={updateNote}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }

  // Main navigation
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Notes" component={NotesStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
