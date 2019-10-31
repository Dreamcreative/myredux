import actionTypes from "../actionTypes";
const initState = {
  info: "初始化"
};
export default function infoReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.INFO:
      return {
        ...state,
        info: action.preload.info || ""
      };
    default:
      return {
        ...state
      };
  }
}
