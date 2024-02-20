import clsx from "clsx";
export const TodoItem = ({ title, done }) => {
  return (
    <div>
      <p className={clsx({ "line-through": done })}>{title}</p>
    </div>
  );
};
