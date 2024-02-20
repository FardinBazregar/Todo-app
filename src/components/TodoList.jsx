import { TodoItem } from "./TodoItem";
export const TodoList = ({ list }) => {
  return (
    <div>
      {list.map(({ id, title, done }) => (
        <TodoItem key={id} title={title} done={done} />
      ))}
    </div>
  );
};
