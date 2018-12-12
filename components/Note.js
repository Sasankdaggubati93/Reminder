import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import AddNote from "./AddNote";
export default class Note extends Component {
  render() {
    let { note, itemKey, viewNote } = this.props;
    return (
      <View
        style={styles.noteCard}
        onLongPress={this.longPress}
        onPress={() => viewNote(itemKey, note.title, note.text)}
      >
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.notes}>{note.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noteCard: {
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    margin: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "normal"
  },
  notes: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "gray"
  }
});
