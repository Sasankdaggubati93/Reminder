import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { addList } from "../actions";
import { Ionicons } from "@expo/vector-icons";
import { saveItem, getItems } from "../utils/api";
import { connect } from "react-redux";
import { idGen } from "../utils/helpers";
import { NavigationActions } from "react-navigation";
class EditNote extends Component {
  state = {
    title: this.props.title,
    text: this.props.text
  };

  saveNote = () => {
    let item = this.state;
    let key = this.props.navigation.getParam("key", idGen());
    console.log(key);
    let { dispatch } = this.props;
    this.props.navigation.goBack();
    dispatch(addList({ [key]: item }));
    saveItem({ key, item });
    this.setState({ title: "", text: "" });
  };

  changeState = () => {
    console.log("change");
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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
          multiline={true}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder="Note..."
        />
        <View style={styles.footer} />
      </KeyboardAvoidingView>
    );
  }
}
const backAction = NavigationActions.back({
  key: "Home"
});
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
    flex: 1,
    height: 100,
    fontSize: 20,
    textAlignVertical: "top"
    // borderWidth: 1,
    // borderColor: "gray"
  },
  footer: {
    height: 60,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    textAlignVertical: "center"
  }
});
function mapStateToProps(state, { navigation }) {
  if (navigation.state.params !== undefined) {
    const { key } = navigation.state.params;
    console.log("statetoprops", key);
    return {
      title: state[key].title,
      text: state[key].text
    };
  } else {
    return {
      title: "",
      text: ""
    };
  }
}
export default connect(mapStateToProps)(EditNote);
