import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contact from "./Components/Routing/Contact";
import Admin from "./Components/Routing/Admin";
import Main_Home from "./Components/Main_Home";
import React, {useState, useEffect} from 'react';
import About from './Components/Routing/About';

const App = ()=> {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main_Home/>} />
        <Route
          path="/contact"
          element={<Contact onLogin={handleLogin} />}
        />
        <Route path="/About" element={<About/>} />
        <Route
          path="/admin"
          element={
            user ? <Admin onLogout={handleLogout} /> : <Navigate to="/contact" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;