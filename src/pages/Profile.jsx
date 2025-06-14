import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    // Fetch user
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));

    // Fetch posts
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => setPosts(res.data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>

      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
      <button onClick={() => navigate(`/users/${id}/edit`)}>
        Edit Profile
      </button>
    </div>
  );
}
