import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getItems } from "../utils/api";
import { getList } from "../actions";
class History extends Component {
  componentDidMount() {
    let { dispatch } = this.props;
    getItems().then(items => {
      dispatch(getList(items));
    });
  }
  render() {
    let { items } = this.props;
    return (
      <View style={styles.container}>
        {Object.keys(items).map(key => (
          <View key={key} style={styles.noteCard}>
            <Text style={styles.title}>{items[key].title}</Text>
            <Text style={styles.notes}>{items[key].text}</Text>
          </View>
        ))}
      </View>
    );
  }
}
function mapStateToProps(items) {
  console.log("notes", items);
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
