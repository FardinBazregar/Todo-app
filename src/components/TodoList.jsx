import { TodoItem } from "./TodoItem";
export const TodoList = ({
  list,
  handleDeletItem,
  handleToggleItem,
  searchTern,
}) => {
  return (
    <div className="p-5">
      {list
        .filter(({ title }) => title.includes(searchTern))
        .map(({ id, title, done }) => (
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
