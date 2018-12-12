import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import AddNote from "./components/AddNote";
import History from "./components/History";
import EditNote from "./components/EditNote";
import Ionicons from "@expo/vector-icons";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <AppContainer />
          {/* <AddNote /> */}
        </View>
      </Provider>
    );
  }
}
const MainNav = createStackNavigator({
  Home: {
    screen: createBottomTabNavigator(
      {
        Home: History,
        AddNote: AddNote
      },
      {
        initialRouteName: "Home",
        tabBarOptions: {
          activeTintColor: "#e91e63",
          labelStyle: {
            fontSize: 18,
            paddingBottom: 10
          },
          style: {
            backgroundColor: "white"
          }
        }
      }
    ),
    navigationOptions: {
      header: null
    }
  },
  EditNote: {
    screen: EditNote,
    navigationOptions: {
      header: null
    }
  }
});

const AppContainer = createAppContainer(MainNav);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1
  }
});
