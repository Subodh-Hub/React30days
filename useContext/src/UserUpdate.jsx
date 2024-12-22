import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UserUpdate = () => {
  const [name, setName] = useState("");
  const { updateUser } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim()) {
      updateUser(name);
      setName("");
    }
  }

  return (
    <div>
      <h1>UserUpdate</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UserUpdate;
