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
import { useParams } from 'react-router-dom';

export function TeamRegistration() {
  const {id}=useParams();
  console.log(id)
  const [formData, setFormData] = useState({
    name: '',
    noOfMembers: 0,
    skillsPreffered: '',
    idea: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      let oppoId = id;
      // Send the formData to your backend using fetch or any HTTP client library
      const response = await fetch(`http://localhost:8080/hackmate/v1/opportunity/${oppoId}/team`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials:"include",
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
          <Label htmlFor="name">Team Name</Label>
          <Input id="name" placeholder="Team Name" required onChange={handleChange} name="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="skillsPreffered">Skills Preferred</Label>
          <Input id="skillsPreffered" placeholder="Skills Preferred" required onChange={handleChange} name="skillsPreffered" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="idea">Project Idea</Label>
          <Textarea id="idea" placeholder="idea" required onChange={handleChange} name="idea"/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="noOfMembers">No. of Members</Label>
          <Input id="noOfMembers" placeholder="No. of Members" required onChange={handleChange} name="noOfMembers" type="Number"/>
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
