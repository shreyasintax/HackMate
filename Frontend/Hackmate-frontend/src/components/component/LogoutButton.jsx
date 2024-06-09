import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate("/login");
  };

  return (
    <span className="hidden md:block  text-[#CFF5E7] hover:text-[#59C1BD]"><button onClick={handleLogout}>Logout</button></span>
  );
};

export default Logout;
