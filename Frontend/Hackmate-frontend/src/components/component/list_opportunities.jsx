import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export function ListOpportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    fetch('http://localhost:8080/hackmate/v1/opportunity')
      .then(response => response.json())
      .then(data => setOpportunities(data.opportunity))  
      .catch(error => console.error('Error fetching opportunities:', error));
  }, []); 

  const handleOpportunityClick = (opportunityId) => {
    navigate(`${opportunityId}`); // Navigate to opportunity page with the opportunity ID
  };

  return (
    <div className="grid w-full min-h-screen items-center justify-center gap-4 px-4 pb-4 md:gap-10">
      <div className="container grid gap-4 py-8 md:py-16">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Opportunities</h1>
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Explore the latest opportunities available for you.
          </p>
        </div>
        <div className="grid gap-4">
          {
            opportunities.map(opportunity => (
            <div key={opportunity.id} onClick={() => handleOpportunityClick(opportunity.id)}> {/* Attach onClick handler to the wrapper div */}
              <Card>
                <div className="flex gap-4 p-4 ">
                  {/* <div className="">
                    <img
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-full  border-green-500 object-contain object-center "
                      height="60"
                      src={opportunity.logoUrl}
                      width="120"
                    />
                  </div> */}
                  {
                    console.log(opportunity)
                  }
                  <div className="grid gap-2 text-sm">
                    <h2 className="text-lg font-semibold">{opportunity.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Organized by: {opportunity.mode}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Rewards: {opportunity.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <Button variant="default" className="bg-gray-300 rounded-md">Interested</Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}