import { createSlice } from "@reduxjs/toolkit";
let a = document.getElementsByClassName("erorInputTodo");
const todoSlice = createSlice({
  name: "todos1",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      let id = new Date().toISOString();
      if (action.payload.text === " ") {
        a[0].style.display = "inline";
        console.log("Введите пожалуста задача");
      } else {
        if (a !== " ") {
          a[0].style.display = "none";
        }
        state.todos.push({
          id: id,
          text: action.payload.text,
          completed: false,
        });

        localStorage.setItem(`${id}`, JSON.stringify(action.payload.text));
      }
    },

    storageTask(state, action) {
      let id = new Date().toISOString();
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
        state.todos.push({
          id: id,
          text: value,
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
      toggleTodo.completed = !toggleTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete, storageTask } = todoSlice.actions;
export default todoSlice.reducer;
