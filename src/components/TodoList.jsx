export const TodoList = ({ list }) => {
  return (
    <div>
      {list.map(() => (
        <TodoItem />
      ))}
    </div>
  );
};
