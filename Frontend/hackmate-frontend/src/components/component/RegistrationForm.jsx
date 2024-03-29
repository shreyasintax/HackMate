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
import { toast } from 'react-toastify';

export function Registration({ formData, setFormData, onNext }) {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // const handleSendOtp = () => {
  //   setIsOtpSent(true);
  // }

  const handleSendOtp = async () => {
    // Send request to backend to send OTP to the provided email
    try {
      const response = await fetch('http://localhost:8080/hackmate/v1/user/sendOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });
      console.log(`Response : ${response}`)
      if (response.ok) {
        setIsOtpSent(true);
      } else {
        console.log('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  // const handleVerifyOtp = () => {
  //   setIsOtpVerified(true);
  // }
  const handleVerifyOtp = async () => {
    // Send request to backend to verify OTP
    try {
      const response = await fetch('http://localhost:8080/hackmate/v1/user/verifyOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, otp }),
      });
      console.log(`Response: ${response}`);
      if (response.ok) {
        setIsOtpVerified(true);
        console.log('OTP verified successfully');
      } else {
        console.log('Failed to verify OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (isOtpVerified) {
      onNext(); // Call the onNext function to handle the form submission
    } else {
      console.log('Please verify OTP first');
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-between p-10">
        <img src="/image1.png" alt="background image" className="object-cover w-full h-full" />
      </div>
      <div className="flex-1 flex items-center justify-center p-10">
        <Card className="w-[500px] bg-blue-100">
          <CardHeader>
            <CardTitle>Ready to Be Unstoppable! Create an account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full gap-4">
                <div className="flex space-x-4">
                  <Button variant="outline">Candidate</Button>
                  <Button variant="outline">Organizer</Button>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input placeholder="First Name" value={formData.firstName} onChange={handleChange} name="firstName" />
                  <Input placeholder="Last Name" value={formData.lastName} onChange={handleChange} name="lastName" />
                </div>
                <Input placeholder="Email" value={formData.email} onChange={handleChange} name="email" />
                {
                  isOtpSent ? (
                    <div className="flex space-x-2">
                      {
                        [...Array(6)].map((_, index) => (
                          <Input
                            key={index}
                            placeholder="Enter OTP"
                            maxLength="1"
                            value={otp[index] || ""}
                            onChange={(e) => {
                              const newOtp = [...otp];
                              newOtp[index] = e.target.value;
                              setOtp(newOtp);
                            }}
                          />
                        ))
                      }
                      <Button onClick={handleVerifyOtp} type="button">Submit OTP</Button>
                    </div>
                  ) : (
                    <Button onClick={handleSendOtp} type="button">Send OTP</Button>
                  )
                }
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
                  <Input className="" placeholder="Phone" value={formData.contactNumber} onChange={handleChange} name="contactNumber" />
                </div>
                <Input placeholder="Password" type="password" value={formData.password} onChange={handleChange} name="password" />
                <Input placeholder="Confirm Password" type="password" value={formData.confirmPassword} onChange={handleChange} name="confirmPassword" />
                <Input placeholder="OTP" value={formData.otp} onChange={handleChange} name="otp" />
              </div>
              <Button type="submit" className="w-1/2 bg-blue-600 text-white mt-2" disabled={!isOtpVerified}>
                Next
              </Button>
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
    </div>
  );
}


/**
 * 
 * @see https://v0.dev/t/axcVpVZ4xix
 */


export function Onboarding({ formData, setFormData, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();// Prevent the default form submission behavior
    onSubmit(); // Call the onNext function to handle the form submission
  };
  return (
    <div className="mx-auto max-w-3xl space-y-8 p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight leading-tight">Welcome to the Community</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Let's get to know you better. Complete your profile to join the community.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="soft-skills">Soft Skills</Label>
          <Input id="soft-skills" placeholder="Enter your soft skills" value={formData.softSkills} onChange={handleChange} name="softSkills" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="hard-skills">HardSkills</Label>
          <Input id="hard-skills" placeholder="Enter your hard skills" value={formData.hardSkills} onChange={handleChange} name="hardSkills" />
        </div>
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} name="city" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} name="state" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pinCode">Pincode</Label>
            <Input id="pinCode" placeholder="Enter your pinCode" value={formData.pinCode} onChange={handleChange} name="pinCode" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="accountType">Account Type</Label>
          <Input id="accountType" value={formData.accountType} onChange={handleChange} name="accountType" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input id="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} name="dateOfBirth" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Input id="gender" value={formData.gender} onChange={handleChange} name="gender" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="github">Github</Label>
          <Input id="github" value={formData.github} onChange={handleChange} name="github" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">Linkedin</Label>
          <Input id="linkedin" value={formData.linkedin} onChange={handleChange} name="linkedin" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input id="description" value={formData.description} onChange={handleChange} name="description" />
        </div>
        <button type="submit">Save & Continue</button>
      </form>
    </div>
  );
}


const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
    accountType: '',
    state: '',
    city: '',
    softSkills: '',
    hardSkills: '',
    pinCode: '',
    dateOfBirth: '',
    linkedin: '',
    github: '',
    otp: '',
    gender: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleNext = useCallback(() => {
    setStep(step => step + 1);
    console.log(formData);
    navigate("/onboarding");
  }, [formData, navigate])

  const handleSubmit = useCallback(async () => {
    // Send formData to backend
    console.log(formData);
    try {
      const response = await fetch('http://localhost:8080/hackmate/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle success
        console.log('User submitted successfully');
        navigate("/login");
      } else {
        // Handle error
        console.log("Some error occurred while submitting user - frontend");
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  }, [formData])

  return (
    <Routes>
      <Route path="/showSignup" element={<Registration formData={formData} setFormData={setFormData} onNext={handleNext} />} />
      <Route path="/onboarding" element={<Onboarding formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />} />
    </Routes>
  );
};

export default RegistrationForm;
