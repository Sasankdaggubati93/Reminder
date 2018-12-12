import React, { Component } from "react";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { getItems } from "../utils/api";
import { getList } from "../actions";
import Note from "./Note";
class History extends Component {
  componentDidMount() {
    let { dispatch } = this.props;
    getItems().then(items => {
      dispatch(getList(items));
    });
  }

  viewNote = (key, title, note) => {
    this.props.navigation.navigate("AddNote", {
      key: key,
      title: title,
      note: note
    });
  };
  render() {
    let { items } = this.props;
    return (
      <ScrollView style={styles.container}>
        {Object.keys(items).map(key => (
          <TouchableOpacity
            key={key}
            onPress={() =>
              this.props.navigation.navigate("EditNote", { key: key })
            }
          >
            <Note
              itemKey={key}
              viewNote={this.viewNote}
              key={key}
              note={items[key]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}
function mapStateToProps(items) {
  return {
    items
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
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
export default connect(mapStateToProps)(History);
