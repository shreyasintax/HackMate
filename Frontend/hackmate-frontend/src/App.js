import logo from './logo.svg';
import './App.css';
import { Registration } from './components/component/registration';
import { Onboarding } from './components/component/onboarding';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/component/login';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App;


