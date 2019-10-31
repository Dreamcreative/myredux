// createStore
// getState
// dispatch
// subscribe
import createStore from "./myredux/createStore";
import reducers from "./myreducers/index";
import combineReducer from "./myredux/combineReducer";
import actionTypes from "./actionTypes/index";
const store = createStore(combineReducer(reducers));
store.subscribe(() => {
  console.log("subscribe", store.getState());
});
store.dispatch({ type: actionTypes.INFO, preload: { info: "maxiao" } });
store.dispatch({ type: actionTypes.ADD });
