/**
 * 
 * @see https://v0.dev/t/OOViYtzSwRj
 */
import React, { useCallback, useEffect } from "react"
import { Button } from "../ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../ui/card"
import { Input } from "../ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../ui/select"
import { BrowserRouter as Router, Link, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Label } from "../ui/label"
import { toast } from 'react-toastify';
import { Textarea } from "../ui/textarea";

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
      const data=await response.json();
      if (response.ok) {
        setIsOtpSent(true);
        toast.success(data.message);
        console.log('OTP sent successfully');
      } else {
        toast.error(data.message);
        console.log('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOtp = async () => {
    let fullOtp = otp.join("");
    console.log(fullOtp);
    try {
      const response = await fetch('http://localhost:8080/hackmate/v1/user/verifyOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, otp: fullOtp }),
        credentials: "include"
      });

      const data = await response.json();
      if (response.ok) {
        setIsOtpVerified(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (isOtpVerified) {
      onNext(); // Call the onNext function to handle the form submission
    } else {
      toast.warn("Please verify OTP first")
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 flex flex-col justify-between p-10">
        <img src="/image1.png" alt="background image" className="object-cover w-full h-full" />
      </div>
      <div className="flex-1 flex items-center justify-center  bg-white p-10">
        
        <Card className="w-[500px] bg-blue-100">
          
          <CardHeader>
            <CardTitle>Ready to Find Hackmate! Create an account</CardTitle><br></br>
            <div className="flex gap-10">
            <Link to="/showSignup" className=" bg-white p-3 rounded-3xl border-dashed border-gray-800 border-2 focus:border-gray-800"> Participant</Link>
            <Link to="/signup"  className="  bg-white p-3 rounded-3xl border-dashed border-gray-200 border-2 focus:border-gray-800">Organizer</Link>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full gap-4">
                <div className="flex flex-col space-y-3">
                  <Input placeholder="First Name" value={formData.firstName} onChange={handleChange} name="firstName" />
                  <Input placeholder="Last Name" value={formData.lastName} onChange={handleChange} name="lastName" />
                  <Input placeholder="Email" value={formData.email} onChange={handleChange} name="email" />
                </div>
                <div className="flex space-x-4" >
                  <select id="country-code" className="p-2 rounded-md w-72">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+49">+49</option>
              
            </select>
                  <Input className="" placeholder="Phone" value={formData.contactNumber} onChange={handleChange} name="contactNumber" />
                </div>
                <Input placeholder="Password" type="password" value={formData.password} onChange={handleChange} name="password" />
                <Input placeholder="Confirm Password" type="password" value={formData.confirmPassword} onChange={handleChange} name="confirmPassword" />
              </div>
              {/* <Button type="submit" className="w-1/2 bg-blue-600 text-white mt-2" disabled={!isOtpVerified}>
                Next
              </Button> */}
               <div className="flex ">                  
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
                        <Button onClick={handleVerifyOtp} type="button" className="w-1/3 bg-blue-600 text-white mx-auto mt-4">Submit OTP</Button>
                      </div>
                    ) : (
                      <Button className="w-1/3 bg-blue-600 text-white mx-auto mt-4" onClick={handleSendOtp} type="button" >Verify Email</Button>
                    )
                  }
                  <Button type="submit" className="w-1/2 bg-blue-600 text-white mt-4" disabled={!isOtpVerified}>
                  Next
                </Button></div>
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
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('jwtToken') !== null;
    if (isAuthenticated) {
      navigate('/');
    }
  }, [navigate]);

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
    <div className="mx-auto max-w-4xl space-y-8 p-5 bg-blue-100 ">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight leading-tight">Welcome to the Community</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Let's get to know you better. Complete your profile to join the community.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2 mt-4">
          <Label htmlFor="soft-skills" >Soft Skills</Label>
          <Input id="soft-skills" placeholder="Enter your soft skills" value={formData.softSkills} onChange={handleChange} name="softSkills" />
        </div>
        <div className="space-y-2 mt-4">
          <Label htmlFor="hard-skills">Hard Skills</Label>
          <Input id="hard-skills" placeholder="Enter your hard skills" value={formData.hardSkills} onChange={handleChange} name="hardSkills" />
        </div>
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="space-y-2 mt-4">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} name="city" />
          </div>
          <div className="space-y-2 mt-4">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} name="state" />
          </div>
          <div className="space-y-2 mt-4">
            <Label htmlFor="pinCode">Pincode</Label>
            <Input id="pinCode" placeholder="Enter your pinCode" value={formData.pinCode} onChange={handleChange} name="pinCode" />
          </div>
        </div>
        {/* <div className="space-y-2 mt-4">
          <Label htmlFor="accountType">Account Type</Label>
          <br></br>
           <Input id="accountType" value={formData.accountType} onChange={handleChange} name="accountType" />
          <select id="accountType" value={formData.accountType} onChange={handleChange} name="accountType" className="p-2 rounded-md w-72">
              <option value="Participant">Participant</option>
              <option value="Organizer">Organizer</option>
            </select>
        </div> */}
        <div className="space-y-2 mt-4">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input className="p-2 rounded-md w-72" id="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} name="dateOfBirth" />
        </div>
        <div className="space-y-2 mt-4">
          <Label htmlFor="gender">Gender</Label>
          <br></br>
          {/* <Input id="gender" value={formData.gender} onChange={handleChange} name="gender" /> */}
          <select id="gender" value={formData.gender} onChange={handleChange} name="gender" className="p-2 rounded-md w-72">
              <option value="Other">Other</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              {/* <option value="jpg">JPG</option> */}
            </select>
        </div>
        <div className="space-y-2 mt-4">
          <Label htmlFor="github">Github</Label>
          <Input id="github" value={formData.github} onChange={handleChange} name="github" />
        </div>
        <div className="space-y-2 mt-4">
          <Label htmlFor="linkedin">Linkedin</Label>
          <Input id="linkedin" value={formData.linkedin} onChange={handleChange} name="linkedin" />
        </div>
        <div className="space-y-2 mt-4">
          <Label htmlFor="description">Description</Label>
          {/* <Input id="description" value={formData.description} onChange={handleChange} name="description" /> */}
          <Textarea className="mb-2" placeholder="Description" value={formData.description} onChange={handleChange} name="description"></Textarea>
        </div>
        <div className="mt-4 flex justify-end"><button type="submit">Save & Continue</button>
        </div>
        
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
    accountType: 'Participant',
    state: '',
    city: '',
    softSkills: '',
    hardSkills: '',
    pinCode: '',
    dateOfBirth: '',
    linkedin: '',
    github: '',
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
        credentials: "include"
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
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
