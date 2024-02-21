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
const TodoApp = () => {
  const { handleDeletItem, handleTodoAdd, handleToggleItem, list } = useTodoApp;

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
