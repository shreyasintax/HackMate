/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/OOViYtzSwRj
 */
import React from "react"
import { Button } from "../ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../ui/card"
import { Input } from "../ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../ui/select"
import { BrowserRouter as Router, Link } from 'react-router-dom';
export function Registration() {
  return (
    (<div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-between bg-[#FFD100] p-10">
        <div className="space-y-4">
          <div
            className="bg-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
            <FlagIcon className="text-black" />
          </div>
          <h1 className="text-4xl font-bold text-white">Assessments</h1>
          <p className="text-white">with advance proctoring features</p>
          <div className="space-y-2">
            <Button className="bg-white text-black">Face Proctoring</Button>
            <Button className="bg-white text-black">Geo Tracking</Button>
            <Button className="bg-white text-black">Detect Object</Button>
          </div>
        </div>
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
            <form>
              <div className="grid w-full gap-4">
                <div className="flex space-x-4">
                  <Button variant="outline">Candidate</Button>
                  <Button variant="outline">Recruiter</Button>
                  <Button variant="outline">Organizer</Button>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="User Name" />
                <Input placeholder="Email" />
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
                  <Input className="flex-1" placeholder="Phone" />
                </div>
                <Input placeholder="Password" type="password" />
                <Input placeholder="Confirm Password" type="password" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
          <div>
              Already have an account?
              <Link to="#" className="ml-2 text-blue-600 hover:underline">Login</Link>
          </div>
            <Button className="bg-blue-600 text-white">Next</Button>
          </CardFooter>
        </Card>
      </div>
    </div>)
  );
}


function FlagIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>)
  );
}