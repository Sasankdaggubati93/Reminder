import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { addList } from "../actions";
import { Ionicons } from "@expo/vector-icons";
import { saveItem, getItems } from "../utils/api";
import { connect } from "react-redux";
import { idGen } from "../utils/helpers";
class AddNote extends Component {
  state = {
    title: "",
    text: ""
  };
  saveNote = () => {
    let item = this.state;
    let key = idGen();

    let { dispatch } = this.props;
    console.log(item);
    dispatch(addList({ [key]: item }));
    saveItem({ key, item });
    this.setState({ title: "", text: "" });
  };
  render() {
    return (
      <View style={styles.container}>
        <Ionicons
          name="md-arrow-back"
          size={30}
          style={styles.backArrow}
          onPress={() => this.saveNote()}
        />
        <TextInput
          style={styles.titleInput}
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
          placeholder="Title"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder="Note..."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backArrow: {
    color: "gray",
    paddingBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 10
  },
  titleInput: {
    height: 40,
    fontSize: 24
  },
  textInput: {
    height: 100,
    fontSize: 20
  }
});
// function mapStateToProps(notes) {
//   return {
//     notes
//   };
// }

export default connect()(AddNote);
