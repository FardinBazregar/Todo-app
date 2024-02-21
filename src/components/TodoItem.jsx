import clsx from "clsx";

const Button = ({ children, onclick }) => (
  <button onClick={onclick} className="px-1 mx-1">
    {children}
  </button>
);

export const TodoItem = ({ title, done, onToggle, onDelete }) => {
  return (
    <div
      className={clsx(
        "flex justify-between bg-white shadow-md rounded-md mb-4 p-4 ",
        { "bg-green-50": done }
      )}
    >
      <p className={clsx({ "line-through": done })}>{title}</p>

      <div className="border-l border-gray-400 pl-2">
        <Button onclick={onToggle}>✅</Button>
        <Button onclick={onDelete}>❌</Button>
      </div>
    </div>
  );
};
