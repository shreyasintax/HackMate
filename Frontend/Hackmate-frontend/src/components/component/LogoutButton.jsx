import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
      try {
          const response = await fetch('http://localhost:8080/hackmate/v1/user/logout', {
              method: 'POST',
              credentials: 'include' // Include cookies in the request
          });

          if (response.ok) {
              localStorage.removeItem('jwtToken');
              console.log("cookies removed");
              navigate('/login');
          } else {
              console.error('Logout failed');
          }
      } catch (error) {
          console.error('An error occurred during logout', error);
      }
  };

  return (
    <span className="hidden md:block  text-[#CFF5E7] hover:text-[#59C1BD]"><button onClick={handleLogout}>Logout</button></span>
  );
};

export default Logout;

//