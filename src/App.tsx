import axios from "axios";
import { useState } from "react";
import "./App.css";
import { Todo } from "./Todo"

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};//TodoType型はuserId、id、title、completed というプロパティをもつオブジェクト型

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
        <Todo title={todo.title} userid={todo.userId} />//取得するデータの型を定義していないとundefiedとなってしまう
      ))}
    </div>
  );
};