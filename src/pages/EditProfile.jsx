import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate update (no real API call)
    alert('Profile updated!');
    navigate(`/users/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
      <input
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}