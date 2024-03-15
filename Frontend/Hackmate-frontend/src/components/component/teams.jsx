import { useState, useEffect } from 'react';
import { CardContent, Card, CardFooter } from '../ui/card';
import { Button } from '../ui/button';

export function Teams() {
  const [teamData, setTeamData] = useState([]);

  // let oppoId;
  // useEffect(() => {
  //   fetchTeamData();
  // }, []);
  // const fetchTeamData = async () => {
  //   try {
  //     // oppoId = req.params.oppoId;
  //     // const response = await fetch(`http://localhost:8080/hackmate/v1/opportunity/${oppoId}/team`);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch team data');
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //     setTeamData(data.teams);
  //   } catch (error) {
  //     console.error('Error fetching team data:', error);
  //   }
  // };

  const sendInvite = async (teamId) => {
    // const response = await fetch(`http://localhost:8080/hackmate/v1/opportunity/${oppoId}/team/${teamId}`);
    // console.log(response);
  }
  return (
    <div>
      <div className="w-full max-w-3xl mx-auto grid gap-6">
        <div className="space-y-2">
          <div>
            Teams for
            <span className="font-semibold"> Hackathon</span>
          </div>
          <p className="text-sm leading-none">Here are the teams participating in the "Hackathon" event.</p>
        </div>
        <div className="space-y-4">
          {
            teamData.map(team => (
              <Card key={team.id}>
                <CardContent className="grid gap-2">
                  <div className="flex flex-row items-center space-x-2">
                    <UsersIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    <p className="font-semibold">{team.name}</p>
                  </div>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">{team.idea}</p>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    {/* Skills Preferred: {team.skills.join(', ')} */}
                  </p>
                </CardContent>
                <CardContent className="border-t grid grid-cols-2 items-center">
                  <p className="text-sm">Members</p>
                  <p className="text-sm justify-self-end">{team.noOfMembers}</p>
                  <p className="text-sm">Leader</p>
                  <p className="text-sm justify-self-end">{team.leader}</p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-gray-300 rounded-md p-2 left-5" onClick={() => sendInvite(team._id)}>Interested</Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
