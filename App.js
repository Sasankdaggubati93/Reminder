import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddNote from "./components/AddNote";
import History from "./components/History";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <AddNote />
          {/* <History /> */}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1
  }
});
