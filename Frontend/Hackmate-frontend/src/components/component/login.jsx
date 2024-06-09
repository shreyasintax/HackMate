
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../ui/card";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('jwtToken') !== null;
    if (isAuthenticated) {
      navigate('/');
    }
  }, [navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/hackmate/v1/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      // localStorage.setItem('jwtToken', data);
      // console.log(data.token); 
      // console.log(response);
      if (response.ok) {
        // Handle success
        localStorage.setItem('jwtToken', JSON.stringify(data));
        toast.success(data.message);
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    }

  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex w-1/2 items-center justify-center p-12">
        {/* Left side content */}
        {/* <img src="image1.png"></img> */}
        <img src="/image1.png" alt="background image" className="object-cover w-full h-full" />
      </div>
      <div className="flex  w-1/2 items-center justify-center bg-white p-12">
        <Card className="w-[500px] bg-blue-100  ">
          <CardHeader>
            <CardTitle>Ready to Find Hackmate! 
              Sign in</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <Input
                placeholder="Email address"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <div className="flex items-center mt-6">
                <Checkbox
                  id="remember-me"
                // Implement your rememberMe logic here
                />
                <label className="ml-2 block text-sm leading-5 text-gray-900" htmlFor="remember-me">
                  Remember me
                </label>
                <Link to="#" className="text-sm ml-16 text-blue-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <Button type="submit" className="w-1/2 bg-blue-600 text-white">Sign In</Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="mt-6 mb-6 text-center text-sm leading-5 text-gray-600">
              Don't have an account?
              <Link to="/showSignup" className="ml-1 text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
