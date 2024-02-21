/**
 * List of Todos
 * 1.List
 * 2.Add
 * 3.Toggle
 * 4.Delete
 *
 */

import { TodoForm, TodoList } from "./components";
import { useTodoApp } from "./components/hooks/useTodoApp";
import { useState } from "react";
const TodoApp = () => {
  const [searString, setSearchString] = useState("");
  const { handleDeletItem, handleTodoAdd, handleToggleItem, list } =
    useTodoApp();

  return (
    <div className="container">
      <TodoForm
        onAddTodo={handleTodoAdd}
        onSearch={(tern) => setSearchString(tern)}
      />
      <TodoList
        searchTern={searString}
        list={list}
        handleDeletItem={handleDeletItem}
        handleToggleItem={handleToggleItem}
      />
    </div>
  );
};
export default TodoApp;
