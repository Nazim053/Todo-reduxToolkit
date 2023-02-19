import { useSelector, dispatch } from "react-redux";
import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const [currentTodos, setCurrentTodos] = useState();

  //  Попытка поделючить Drag and Drop
  // function dragStartrHandler(e, text) {
  //   setCurrentTodos(text);
  // }

  // function dragEndrHandler(e) {}
  // function dragOverHandler(e) {
  //   e.preventDefault();
  // }

  // function dropHandler(e, text) {
  //   e.preventDefault();
  //   todos.map((c) => {
  //     if (c.id === todos.id) {
  //       return { ...c};
  //     }
  //     if (c.id === currentTodos.id) {
  //       return { ...c};
  //     }
  //   });
  // }

  // const sortTask = (a, b) => {
  //   if (a.id > b.id) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // };

  return (
    <>
      <ul className="todoList">
        {todos.map((todo) => (
          <li
            // onDragStart={(e) => dragStartrHandler(e, todos.text)}
            // onDragLeave={(e) => dragEndrHandler(e)}
            // onDragEnd={(e) => dragEndrHandler(e)}
            // onDragOver={(e) => dragOverHandler(e)}
            // onDrop={(e) => dropHandler(e, todo.text)}
            draggable={true}
            className="todoLi"
          >
            {<TodoItem key={todo.id} {...todo} />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
