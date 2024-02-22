import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
export const useTodoApp = () => {
  const [defaulList, { set }] = useLocalStorage("todos");
  const [list, setList] = useState(defaulList || []);

  const handleDeletItem = (todoId) => {
    const newList = list.filter(({ id }) => id !== todoId);
    set("todos", newList);

    setList(newList);
  };
  const handleToggleItem = (Todoid) => {
    const todoItems = list.map((item) => {
      if (item.id === Todoid) item.done = !item.done;
      return item;
    });
    setList(todoItems);
    set("todos", todoItems);
  };

  const handleTodoAdd = (title) => {
    const newTodoItem = {
      id: list.length + 1,
      title,
      done: false,
    };
    const newTodos = [...list, newTodoItem];
    setList(newTodos);
    set("todos", newTodos);
  };

  return {
    list,
    handleDeletItem,
    handleToggleItem,
    handleTodoAdd,
  };
};
