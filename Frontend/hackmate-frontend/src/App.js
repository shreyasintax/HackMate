import logo from './logo.svg';
import './App.css';
import { Registration } from './components/component/registration';
import { Onboarding } from './components/component/onboarding';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route path="/about" element={<Onboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
