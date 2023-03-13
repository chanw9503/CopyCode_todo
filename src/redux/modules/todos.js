import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: '리액트 공부하기',
    contents: '빨리빨리 암기하기',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: '스프링 공부하기',
    contents: '인강 열심히 들어보기!!',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: '데이트',
    contents: '성수역 3번출구',
    isDone: false,
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //불변성을 유지시켜야 한다!
      // return [...state, action.payload];
      //redux toolkit 안에 immer 라는
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    switchTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
