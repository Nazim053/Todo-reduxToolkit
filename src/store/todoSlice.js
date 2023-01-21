import { createSlice } from "@reduxjs/toolkit";
let a = document.getElementsByClassName("erorInputTodo");
const todoSlice = createSlice({
  name: "todos1",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      if (action.payload.text ===" ") {
        a[0].style.display = "inline";
        console.log("Введите пожалуста задача");
      } else {
        if (a !== " ") {
          a[0].style.display = "none";
        }
        state.todos.push({
          id: new Date().toISOString(),
          text: action.payload.text,
          completed: false,
        });
      }
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggleTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggleTodo.completed =!toggleTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
