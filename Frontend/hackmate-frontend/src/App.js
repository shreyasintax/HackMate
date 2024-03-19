import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from './components/component/login';
import { Create_opportunity } from './components/component/create_opportunity';
import { Profile } from './components/component/profile';
import RegistrationForm from './components/component/RegistrationForm';

import { Teams } from './components/component/teams';
import { TeamRegistration } from './components/component/team_registration';
import { ListOpportunities } from './components/component/list_opportunities';
import { OpportunityPage } from './components/component/opportunitypage';
import PreRegistration from './components/component/PreRegistration';
import { HomePage }from './components/component/HomePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<RegistrationForm/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/opportunity_list" element={<Create_opportunity/>} />
        <Route path="/profile" element={<Profile user="Shreya"/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/team_registration" element={<TeamRegistration/>}/>
        <Route path="/list_opportunities" element={<ListOpportunities/>}/>
        <Route path="/opportunity/:id/*" element={<OpportunityPage />} />
        <Route path = "/prereg" element={<PreRegistration/>} />
        <Route path = "/" element={<HomePage/>} />

        
        <Route path = "/acceptPage/:teamId" element = {<AcceptOpportunity/>}/>

      </Routes>
    </Router>


  )
}

export default App;
