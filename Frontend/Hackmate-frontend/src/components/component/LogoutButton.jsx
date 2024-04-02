import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
