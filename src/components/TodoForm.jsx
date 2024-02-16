import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [tern, setTern] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(tern);
  };
  return (
    <form className="p-2 border-b border-gray-400 " onSubmit={handleSubmit}>
      <input
        className="border px-2 py-1 mr-2 rounded-md"
        value={tern}
        onChange={({ target }) => setTern(target.value)}
      />
      <button
        className="bg-green-400 py-1 px-4 border-green-500 border text-white rounded-md hover:bg-green-700 transition-colors"
        type="submit "
      >
        Save
      </button>
    </form>
  );
};
