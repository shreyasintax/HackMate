import React, { useCallback } from "react"
import { Button } from "../ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../ui/card"
import { Input } from "../ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../ui/select"
import { BrowserRouter as Router, Link, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Label } from "../ui/label"
import { toast } from 'react-toastify';
import { Textarea } from "../ui/textarea";
export function Signup({ formData, setFormData, onNext }) {
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
              <CardTitle>Ready to Be Unstoppable! Create an account</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full gap-4">
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
                  <div className="flex space-x-4" >
                    <Select >
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