import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodoComplete, removeTodo } from "../../../store/todoSlice";
import "./TodoItem.css";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <input
          className="inputTask"
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodoComplete({ id }))}
        />
        <span className="taskText">{text}</span>
      </div>
      <div>
        <span
          className="deleteTask"
          onClick={() => dispatch(removeTodo({ id }))}
        >
          &times;
        </span>
      </div>
    </>
  );
};

export default TodoItem;
