import { TodoItem } from "./TodoItem";
export const TodoList = ({ list }) => {
  return (
    <div className="p-5">
      {list.map(({ id, title, done }) => (
        <TodoItem key={id} title={title} done={done} />
      ))}
    </div>
  );
};
