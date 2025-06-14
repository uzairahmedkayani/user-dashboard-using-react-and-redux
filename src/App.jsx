import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import EditProfile from './pages/EditProfile.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:id" element={<Profile />} />
      <Route path="/users/:id/edit" element={<EditProfile />} />
    </Routes>
  );
}
export default App;