# 实现一个 redux

## createStore 返回一个 store 对象

### store 对象中包含了 dispatch/getState/subscribe 3 个方法

1. dispatch 方法 触发 reducer 事件
2. getState 方法 获得当前所有的 state 状态
   reducers 发送命令 ???

## combineReducer

- 传入所有的 reducer 对象，返回一个 reducer 方法

## actionTypes

- 管理所有的 action types
