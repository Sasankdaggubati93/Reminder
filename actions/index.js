export const ADD_LIST = "ADD_LIST";
export const GET_LIST = "GET_LIST";

export function addList(list) {
  console.log("action", list);
  return {
    type: ADD_LIST,
    list
  };
}

export function getList(lists) {
  return {
    type: GET_LIST,
    lists
  };
}
