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

  const handleDeletItem = (todoId) => {
    const newList = list.filter(({ id }) => id !== todoId);
    setList(newList);
  };
  const handleToggleItem = (Todoid) => {
    setList((prevList) => {
      return prevList.map((item) => {
        if (item.id === Todoid) item.done = !item.done;
        return item;
      });
    });
  };

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
      <TodoList
        list={list}
        handleDeletItem={handleDeletItem}
        handleToggleItem={handleToggleItem}
      />
    </div>
  );
};
export default TodoApp;
