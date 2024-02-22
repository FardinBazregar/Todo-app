import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
export const useTodoApp = () => {
  const [defaulList, { get }] = useLocalStorage("todos");
  const [list, setList] = useState(defaulList);

  const handleDeletItem = (todoId) => {
    const newList = list.filter(({ id }) => id !== todoId);
    setList(newList);
  };
  const handleToggleItem = (Todoid) => {
    setList(
      list.map((item) => {
        if (item.id === Todoid) item.done = !item.done;
        return item;
      })
    );
  };

  const handleTodoAdd = (title) => {
    const newTodoItem = {
      id: list.length + 1,
      title,
      done: false,
    };
    setList([...list, newTodoItem]);
  };

  return {
    list,
    handleDeletItem,
    handleToggleItem,
    handleTodoAdd,
  };
};
