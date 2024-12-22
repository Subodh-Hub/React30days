import React from "react";
import UserProfile from "./UserProfile";
import { UserProvider } from "./UserContext";
import UserUpdate from "./UserUpdate";

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UserUpdate />
    </UserProvider>
  );
};

export default App;
