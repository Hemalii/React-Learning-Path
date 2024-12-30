import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import "./App.css";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  };

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const updateUser = (updatedUser) => {
    console.log("Updating user:", updatedUser);

    setUsers(
      users.map((user) => {
        if (user.id === updatedUser.id) {
          return { ...user, ...updatedUser };
        }
        return user;
      })
    );
  };

  const removeUser = (id) => {
    setUsers((prevUsers) => {
      const remainingUsers = prevUsers.filter((user) => user.id !== id);
      console.log("Users after removal:", remainingUsers);
      return remainingUsers;
    });
  };

  return (
    <div className="App">
      <div className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            updateUser={updateUser}
            removeUser={removeUser}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
