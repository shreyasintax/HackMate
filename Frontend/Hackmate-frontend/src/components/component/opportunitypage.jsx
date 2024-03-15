import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Opportunity } from './opportunity';

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

  return <Opportunity opportunityData={opportunityData} />;
}
