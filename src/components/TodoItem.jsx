import clsx from "clsx";
export const TodoItem = ({ title, done }) => {
  return (
    <div className=" flex justify-between bg-white shadow-md rounded-md mb-4 p-4">
      <p className={clsx({ "line-through": done })}>{title}</p>

      <div>
        <button className="px-1 mx-1">✅</button>
        <button className="px-1 mx-1">❌</button>
      </div>
    </div>
  );
};
