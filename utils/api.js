import { AsyncStorage } from "react-native";
import { KEY, formattedResults } from "./helpers";

export function saveItem({ key, item }) {
  return AsyncStorage.mergeItem(
    KEY,
    JSON.stringify({
      [key]: item
    })
  );
}
export function getItems() {
  return AsyncStorage.getItem(KEY).then(formattedResults);
}
