import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Opportunity } from './opportunity';
import { TeamRegistration } from './team_registration';
import { Teams } from './teams';

export function OpportunityPage() {
  const { id } = useParams();
  const [opportunityData, setOpportunityData] = useState(null);
  const [roundDetails, setRoundDetails] = useState(null);

  useEffect(() => {
    async function fetchOpportunityData() {
      try {
        const response = await fetch(`http://localhost:8080/hackmate/v1/opportunity/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setOpportunityData(data.opportunity);
        console.log(data.opportunity);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchOpportunityData();
  }, []);
  if (!opportunityData)
    return <div>Loading...</div>

  return (
    <Routes>
      <Route path="/" element={<Opportunity OpportunityData={opportunityData} />} />
      <Route path="register_team" element={<TeamRegistration />} />
      <Route path="join_team" element={<Teams />} />
    </Routes>
  );
}

