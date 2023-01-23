import { useDispatch } from "react-redux";
import { toggleTodoComplete, removeTodo } from "../../../store/todoSlice";
import './TodoItem.css'

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();


  

  return (
    <li className="todoLi">
      <div>
      <input className="inputTask"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
        <span className="taskText">{text}</span>
      </div>
    <div>
    <span className="deleteTask" onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
    </div>
    </li>
  );
};

export default TodoItem;
