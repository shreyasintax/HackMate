import React, { useState } from "react";
import { Button } from "../ui/button";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../ui/card";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function OrganizerSignup({ formData, setFormData, onSubmit }) {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSendOtp = async () => {
    try {
      const response = await fetch("http://localhost:8080/hackmate/v1/user/sendOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsOtpSent(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleVerifyOtp = async () => {
    const fullOtp = otp.join("");
    try {
      const response = await fetch("http://localhost:8080/hackmate/v1/user/verifyOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, otp: fullOtp }),
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        setIsOtpVerified(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isOtpVerified) {
      try {
        const response = await fetch("http://localhost:8080/hackmate/v1/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        });
        const data = await response.json();
        if (response.ok) {
          toast.success(data.message);
          onSubmit();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      toast.warn("Please verify OTP first");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 flex flex-col justify-between p-10">
        <img src="/image1.png" alt="background image" className="object-cover w-full h-full" />
      </div>
      <div className="flex-1 flex items-center justify-center bg-white p-10">
        <Card className="w-[500px] bg-blue-100">
          <CardHeader>
            <CardTitle>Ready to Find Hackmate! Create an account</CardTitle>
            <br />
            <div className="flex gap-10">
              <Link to="/showSignup" className="bg-white p-3 rounded-3xl border-dashed border-gray-800 border-2 focus:border-gray-800">
                Participant
              </Link>
              <Link to="/signup" className="bg-white p-3 rounded-3xl border-dashed border-gray-200 border-2 focus:border-gray-800">
                Organizer
              </Link>
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
                <div className="flex space-x-4">
                  <select id="country-code" className="p-2 rounded-md w-72" name="countryCode" onChange={handleChange}>
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+49">+49</option>
                  </select>
                  <Input placeholder="Phone" value={formData.contactNumber} onChange={handleChange} name="contactNumber" />
                </div>
                <Input placeholder="Password" type="password" value={formData.password} onChange={handleChange} name="password" />
                <Input placeholder="Confirm Password" type="password" value={formData.confirmPassword} onChange={handleChange} name="confirmPassword" />
              </div>
              <div className="flex">
                {isOtpSent ? (
                  <div className="flex space-x-2">
                    {otp.map((value, index) => (
                      <Input
                        key={index}
                        placeholder="Enter OTP"
                        maxLength="1"
                        value={value}
                        onChange={(e) => {
                          const newOtp = [...otp];
                          newOtp[index] = e.target.value;
                          setOtp(newOtp);
                        }}
                      />
                    ))}
                    <Button onClick={handleVerifyOtp} type="button" className="w-1/3 bg-blue-600 text-white mx-auto mt-4">
                      Submit OTP
                    </Button>
                  </div>
                ) : (
                  <Button className="w-1/3 bg-blue-600 text-white mx-auto mt-4" onClick={handleSendOtp} type="button">
                    Verify Email
                  </Button>
                )}
                <Button type="submit" className="w-1/2 bg-blue-600 text-white mt-4" disabled={!isOtpVerified}>
                  Next
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div>
              Already have an account?
              <Link to="/login" className="ml-2 text-blue-600 hover:underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
    accountType: 'Organiser',
    state: 'null',
    city: 'null',
    softSkills: 'null',
    hardSkills: 'null',
    pinCode: 'null',
    dateOfBirth: '2004-06-03',
    linkedin: 'null',
    github: 'null',
    gender: 'Female',
    description: 'null'
  });

  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("Signup Successful");
    navigate("/login")
  };

  return (
    <OrganizerSignup formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
  );
};
