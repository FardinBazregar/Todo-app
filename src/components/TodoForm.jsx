import { useState } from "react";

export const TodoForm = ({ onAddTodo, onSearch }) => {
  const [tern, setTern] = useState("");

  const [searchTern, setSearchTern] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(tern);
    setTern("");
  };

  const handleSearch = ({ target }) => {
    setSearchTern(target.value);
    onSearch(target.value);
  };
  return (
    <form className="p-2 border-b border-gray-400 " onSubmit={handleSubmit}>
      <div className="mb-4">
        <h4>Add</h4>
        <input
          className="border px-2 py-1 mr-2 rounded-md"
          value={tern}
          onChange={({ target }) => setTern(target.value)}
        />
        <button
          className="bg-green-400 py-1 px-4 border-green-500 border text-white rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-300 border-none"
          type="submit "
          disabled={!tern.trim()}
        >
          Save
        </button>
      </div>

      <div>
        <h4>Search</h4>
        <input
          className="border px-2 py-1 mr-2 rounded-md"
          value={searchTern}
          onChange={handleSearch}
        />
      </div>
    </form>
  );
};
