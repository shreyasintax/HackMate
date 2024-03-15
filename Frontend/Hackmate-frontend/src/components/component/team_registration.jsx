/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eTAY7aQzamm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useState } from 'react';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function TeamRegistration() {
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeader: '',
    skills: '',
    projectIdea: '',
    email: '',
    phone: '',
    college: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); 
    try {
      // Send the formData to your backend using fetch or any HTTP client library
      const response = await fetch('/api/registerTeam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Handle success
        console.log('Team registration successful');
      } else {
        // Handle error
        console.error('Team registration failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form className="mx-auto max-w-2xl space-y-8" onSubmit={handleSubmit}>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Team Registration</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to register your team</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="team-name">Team Name</Label>
          <Input id="teamName" placeholder="Team Name" required onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="team-leader">Team Leader</Label>
          <Input id="teamLeader" placeholder="Team Leader" required onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="skills">Skills Preferred</Label>
          <Input id="skills" placeholder="Skills Preferred" required onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="project-idea">Project Idea</Label>
          <Textarea id="projectIdea" placeholder="Project Idea" required onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Email" required type="email" onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Phone Number" required type="tel" onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="college">College Name</Label>
          <Input id="college" placeholder="College Name" required onChange={handleChange} />
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}


