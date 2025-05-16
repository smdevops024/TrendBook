import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import { useAuthStore } from './store/authStore';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  const { token } = useAuthStore();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      {token && <Navbar />}
      <div className="flex flex-1">
        {token && <Sidebar />}
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={token ? <Feed /> : <Navigate to="/login" />} />
            <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;