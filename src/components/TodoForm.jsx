import { useState } from "react";

export const TodoForm = () => {
  const [tern, setTern] = useState("");
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <input value={tern} onChange={({ target }) => setTern(target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};
