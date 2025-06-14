import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';

export default function Home() {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => window.location.href=`/users/${user.id}`}>
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
}