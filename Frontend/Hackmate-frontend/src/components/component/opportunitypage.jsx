import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Route, Routes, useParams } from 'react-router-dom';
import { Opportunity } from './opportunity';
import { TeamRegistration } from './team_registration';
import { Teams } from './teams';

export function OpportunityPage() {
  const { id } = useParams();
  const [opportunityData, setOpportunityData] = useState(null);

  useEffect(() => {
    async function fetchOpportunityData() {
      try {
        const response = await fetch(`/hackmate/v1/opportunities/${id}`); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setOpportunityData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchOpportunityData();
  }, [id]);

  return (
    <Routes>
      <Route path="/" element={<Opportunity dummyOpportunityData={opportunityData} />} />
      <Route path="register_team" element={<TeamRegistration />} />
      <Route path="join_team" element={<Teams />} />
    </Routes>
  );
}

