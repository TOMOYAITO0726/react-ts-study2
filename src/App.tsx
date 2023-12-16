import axios from "axios";
import { useState } from "react";
import "./App.css";
import { Todo } from "./Todo"
import { TodoType } from "./types/todo";


export default function App() {
  const [todos, setTodos ] = useState<Array<TodoType>>([]);//todos変数にTodoType型の配列を割り当てている
  const onClickFetchData = () => {
    axios
    .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      setTodos(res.data);//todos変数にrea.data配列が代入される
      console.log(res);
  });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) =>(
        <Todo key={todo.id} 
              title={todo.title} 
              userId={todo.userId} 
              completed={todo.completed} 
              />//取得するデータの型を定義していないとundefiedとなってしまう
      ))}
    </div>
  );
};