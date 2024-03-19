import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar'; // Assuming you have a ProgressBar component
import { Button } from '../ui/button';

export function Matching() {
  const [skillsArray1, setSkillsArray1] = useState([]);
  const [skillsArray2, setSkillsArray2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Dummy data for skills arrays (replace this with actual backend fetch)
        const dummySkillsArray1 = ['JavaScript', 'React', 'Node.js', 'CSS','mongo','aws'];
        const dummySkillsArray2 = ['React', 'Python', 'CSS', 'HTML'];

        // Set the dummy data to the state
        setSkillsArray1(dummySkillsArray1);
        setSkillsArray2(dummySkillsArray2);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  function calculateSkillMatchPercentage(skills1, skills2) {
    const set1 = new Set(skills1);
    const set2 = new Set(skills2);

    let matchingSkillsCount = 0;
    set1.forEach(skill => {
      if (set2.has(skill)) {
        matchingSkillsCount++;
      }
    });

    const totalSkills = Math.max(set1.size, set2.size);
    const matchPercentage = (matchingSkillsCount / totalSkills) * 100;

    return matchPercentage.toFixed(2);
  }

  // Dummy data for sorting
  const dummyData = [
    { skills1: ['JavaScript', 'React', 'Node.js', 'CSS','mongo','aws'], skills2: ['React', 'Python', 'CSS', 'HTML'] },
    { skills1: ['JavaScript', 'React', 'Node.js'], skills2: ['React', 'Python', 'CSS'] },
    { skills1: ['JavaScript', 'React'], skills2: ['React', 'Python'] },
    { skills1: ['JavaScript'], skills2: ['Python'] },
    { skills1: [], skills2: [] },
  ];

  const sortedData = dummyData.map(({ skills1, skills2 }) => ({
    skills1,
    skills2,
    matchPercentage: calculateSkillMatchPercentage(skills1, skills2),
  })).sort((a, b) => b.matchPercentage - a.matchPercentage);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Sorted Data:</p>
      {sortedData.map((item, index) => (
        <div key={index} className="border border-black p-10 m-10 rounded-lg bg-blue-100 w-1/2">
          <h3 className='text-center font-bold text-lg '>Team {index + 1}</h3>
          
          <p className='space-x-2 space-y-2'>Skills 1: {item.skills1.map((skill,index)=>(<Button key={index} className="text-sm rounded-lg border-gray-500 bg-white " variant="outline">{skill}</Button>))}</p>
          <p className='space-x-2 space-y-2'>Skills 2: {item.skills2.map((skill,index)=>(<Button key={index} className="text-sm rounded-lg border-gray-500 bg-white " variant="outline">{skill}</Button>))}</p>
          <p className='text-3xl  mt-3 '>{item.matchPercentage}%</p>
         
        </div>
      ))}
    </div>
  );
}
