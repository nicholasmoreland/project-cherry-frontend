import React, { useState, useEffect } from 'react';
import { fetchUsers } from './api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const data = await fetchUsers();
      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
