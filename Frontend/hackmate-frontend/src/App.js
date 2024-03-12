import logo from './logo.svg';
import './App.css';
import { Registration } from './components/component/registration';
import { Onboarding } from './components/component/onboarding';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/component/login';
import { Create_opportunity } from './components/component/create_opportunity';
import { Profile } from './components/component/profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/opportunity_list" element={<Create_opportunity/>} />
        <Route path="/profile" element={<Profile user="Shreya"/>}/>
      </Routes>
    </Router>
  
   
  )
}

export default App;


