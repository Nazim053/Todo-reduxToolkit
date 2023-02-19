import TodoList from "./components/TodoInput/TodoList/TodoList";
import "./App.css";
import InputField from "./components/TodoInput/inputField/inputField";
import { useDispatch } from "react-redux";
import { storageTask } from "./store/todoSlice";

const App = () => {
  const dispatch = useDispatch();

  dispatch(storageTask());

  return (
    <div className="App">
      <div className="container">
        <div className="todoContainer">
          <div className="containerTitleTodo">
            <span className="titleTodo">Какие задачи на сегодня</span>
          </div>
          <span className="erorInputTodo">Не ведена задача!</span>
          <InputField />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
