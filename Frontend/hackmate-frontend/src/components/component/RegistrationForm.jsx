/**
 * 
 * @see https://v0.dev/t/OOViYtzSwRj
 */
import React, { useCallback } from "react"
import { Button } from "../ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../ui/card"
import { Input } from "../ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../ui/select"
import { BrowserRouter as Router, Link, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Label } from "../ui/label"
export function Registration({ formData, setFormData, onNext }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  onNext(); // Call the onNext function to handle the form submission
};
  return (
    (<div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-between bg-[#FFD100] p-10">
          
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-10">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Ready to Be Unstoppable! Create an account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit = {handleSubmit}>
              <div className="grid w-full gap-4">
                <div className="flex space-x-4">
                  <Button variant="outline">Candidate</Button>
                  <Button variant="outline">Recruiter</Button>
                  <Button variant="outline">Organizer</Button>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input placeholder="First Name" value={formData.fname} onChange={handleChange} name="fname"/>
                  <Input placeholder="Last Name" value = {formData.lname} onChange={handleChange} name="lname"/>
                </div>
                <Input placeholder="User Name" value={formData.username} onChange={handleChange} name = "username"/>
                <Input placeholder="Email" value={formData.email} onChange={handleChange} name = "email"/>
                <div className="flex space-x-2">
                  <Select>
                    <SelectTrigger id="country-code">
                      <SelectValue>+91</SelectValue>
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="+1">+1</SelectItem>
                      <SelectItem value="+91">+91</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input className="flex-1" placeholder="Phone" value={formData.phone} onChange={handleChange} name = "phone"/>
                </div>
                <Input placeholder="Password" type="password" value = {formData.password} onChange={handleChange} name = "password"/>
                <Input placeholder="Confirm Password" type="password" />
              </div>
              <button type = "submit" className="bg-blue-600 text-white">Next</button>


            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
          <div>
              Already have an account?
              <Link to="/login" className="ml-2 text-blue-600 hover:underline">Login</Link>
          </div>
          </CardFooter>
        </Card>
      </div>
    </div>)
  );
}



/**
 * 
 * @see https://v0.dev/t/axcVpVZ4xix
 */


export function Onboarding({ formData, setFormData, onSubmit }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();// Prevent the default form submission behavior
      onSubmit(); // Call the onNext function to handle the form submission
    };
  return (
    (<div className="mx-auto max-w-3xl space-y-8 p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight leading-tight">Welcome to the Community</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Let's get to know you better. Complete your profile to join the community.
        </p>
      </div>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="space-y-2">
            <Label htmlFor="degree">Degree</Label>
            <Input id="degree" placeholder="e.g. Computer Science" value={formData.degree} onChange={handleChange} name="degree"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="college-name">College Name</Label>
            <Input id="college-name" placeholder="e.g. Harvard University" value={formData.college} onChange={handleChange} name = "college"/>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="soft-skills">Soft Skills</Label>
          <Input id="soft-skills" placeholder="Enter your soft skills" value={formData.skill} onChange={handleChange} name = "skill"/>
        </div>
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} name = "city" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} name = "state" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode</Label>
            <Input id="pincode" placeholder="Enter your pincode" value={formData.pincode} onChange={handleChange} name = "pincode"/>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" type="date" value={formData.dob} onChange={handleChange} name = "dob"/>
        </div>
        <button type = "submit">Save & Continue</button>
        </form>
    </div>
  )
  );
}


const RegistrationForm = () => {
  const [step, setStep] = useState(1);  
  const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        degree: '',
        college: '',
        state: '',
        city: '',
        skill: '',
        pincode: '',
        dob: ''

    });

    const navigate = useNavigate();

    const handleNext = useCallback(() => {
        setStep(step => step + 1);
        console.log(formData);
        navigate("/onboarding");
    }, [formData, navigate])

    const handleSubmit = useCallback(() => {
        // Send formData to backend
        console.log(formData);
    }, [formData])

    return (
        <Routes>
            <Route path="/reg" element={<Registration formData={formData} setFormData={setFormData} onNext={handleNext} />} />
            <Route path="/onboarding" element={<Onboarding formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />} />
        </Routes>
    );
};

export default RegistrationForm;