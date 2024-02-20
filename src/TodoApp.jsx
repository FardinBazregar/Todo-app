/**
 * List of Todos
 * 1.List
 * 2.Add
 * 3.Toggle
 * 4.Delete
 *
 */

import { useState } from "react";
import { TodoForm, TodoList } from "./components";
const TodoApp = () => {
  const [list, setList] = useState([]);
  const handleTodoAdd = (title) => {
    const newTodoItem = {
      id: list.length + 1,
      title,
      done: false,
    };
    setList([...list, newTodoItem]);
  };

  return (
    <div className="container">
      <TodoForm onAddTodo={handleTodoAdd} />
      <TodoList list={list} />
    </div>
  );
};
export default TodoApp;
