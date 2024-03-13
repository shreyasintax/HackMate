import logo from './logo.svg';
import './App.css';
import { Registration } from './components/component/registration';
import { Onboarding } from './components/component/onboarding';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/component/login';
import { Create_opportunity } from './components/component/create_opportunity';
import { Profile } from './components/component/profile';
import { Teams } from './components/component/teams';
import { TeamRegistration } from './components/component/team_registration';
import { ListOpportunities } from './components/component/list_opportunities';
import { Opportunity } from './components/component/opportunity';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/opportunity_list" element={<Create_opportunity/>} />
        <Route path="/profile" element={<Profile user="Shreya"/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/team_registration" element={<TeamRegistration/>}/>
        <Route path="/list_opportunities" element={<ListOpportunities/>}/>
        <Route path="/opportunity" element={<Opportunity/>}/>

      </Routes>
    </Router>

   
  )
}

export default App;


