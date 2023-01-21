import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todoSlice";
import "./inputField.css"


const InputField = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <div className="blockInput">
        <div>
        <input
          id  = 'inputID'
          className="inputPost"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Какая задача на сегодня ?"
        />
        </div>
       <div>
       <button className="buttonPost" onClick={addTask}>
          Добавить
        </button>
       </div>
    </div>
  );
};

export default InputField;
