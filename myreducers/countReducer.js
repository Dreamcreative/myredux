import actionTypes from "../actionTypes";
const initState = {
  count: 0
};
export default function countReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return {
        ...state
      };
  }
}
