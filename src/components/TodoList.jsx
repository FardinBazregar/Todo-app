import { TodoItem } from "./TodoItem";
export const TodoList = ({ list, handleDeletItem, handleToggleItem }) => {
  return (
    <div className="p-5">
      {list.map(({ id, title, done }) => (
        <TodoItem
          key={id}
          title={title}
          done={done}
          onDelete={() => handleDeletItem(id)}
          onToggle={() => handleToggleItem(id)}
        />
      ))}
    </div>
  );
};
