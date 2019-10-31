export default function combineReducer(reduceMap) {
  const reduceKeys = Object.keys(reduceMap);
  const finalReducer = {};
  reduceKeys.forEach(key => {
    if (typeof reduceMap[key] === "function") {
      finalReducer[key] = reduceMap[key];
    }
  });
  const finalKeys = Object.keys(finalReducer);
  return function(state, action) {
    const nextState = {};
    finalKeys.forEach(reduceKey => {
      const currentReduce = reduceMap[reduceKey];
      // 每次所有的reducer都会被执行
      nextState[reduceKey] = currentReduce(state && state[reduceKey], action);
    });
    return nextState;
  };
}
