import React, { useState, useEffect } from 'react';

export function Matching() {
  const [skillsArray1, setSkillsArray1] = useState([]);
  const [skillsArray2, setSkillsArray2] = useState([]);

  useEffect(() => {
    // Dummy data for skills arrays
    const dummySkillsArray1 = ['JavaScript', 'React', 'Node.js', 'CSS','mongo','aws'];
    const dummySkillsArray2 = ['React', 'Python', 'CSS', 'HTML'];

    // Set the dummy data to the state
    setSkillsArray1(dummySkillsArray1);
    setSkillsArray2(dummySkillsArray2);
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

  const skillMatchPercentage = calculateSkillMatchPercentage(skillsArray1, skillsArray2);

  return (
    <div>
      <p>Percentage of skill match: {skillMatchPercentage}%</p>
    </div>
  );
}




