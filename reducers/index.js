import { ADD_LIST, GET_LIST } from "../actions";

function listReducer(state = [], action) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        ...action.list
      };
    case GET_LIST:
      return {
        ...state,
        ...action.lists
      };
    default: {
      return state;
    }
  }
}
export default listReducer;
