import TodoList from "./components/TodoInput/TodoList/TodoList";
import "./App.css";
import InputField from "./components/TodoInput/inputField/inputField";

const  App :React.FunctionComponent  = () =>  {



  return (
    <div className="App">
      {/* <AuthInput/> */}
      <div className="container">
        <div className="todoContainer">
        <div className="containerTitleTodo">
        <span className="titleTodo">Какие задачи на сегодня</span>
        </div>
        <span className="erorInputTodo">Не ведена задача!</span>
        <InputField/>
        <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
