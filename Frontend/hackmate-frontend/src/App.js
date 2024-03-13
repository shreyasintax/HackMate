import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Registration } from './components/component/registration';
import { Onboarding } from './components/component/onboarding';
import { Login } from './components/component/login';
import { Create_opportunity } from './components/component/create_opportunity';
import { Profile } from './components/component/profile';
import RegistrationForm from './components/component/RegistrationForm';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<RegistrationForm/>} />
        <Route exact path="/" element={<Registration/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/opportunity_list" element={<Create_opportunity />} />
        <Route path="/profile" element={<Profile user="Shreya" />} />
      </Routes>
    </Router>
  );
}

export default App;
