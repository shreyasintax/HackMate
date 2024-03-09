
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Checkbox } from "../ui/checkbox";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../ui/card"
import { Link } from 'react-router-dom';


// import Link from "next/link"

export function Login() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex w-1/2 items-center justify-center p-12">
        <div>
          <h1 className="text-4xl font-bold">Welcome to Educatsy Online Learning Platform</h1>
          <img
            alt="Learning illustration"
            className="mt-6"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
      </div>
      <div className="flex  w-1/2 items-center justify-center bg-white p-12">
        <Card className="w-[500px] ">
        {/* <div className="w-full max-w-md"> */}
          {/* <div className="flex items-center justify-between"> */}
          <CardHeader>
            <CardTitle>Ready to Be Unstoppable! Sign in</CardTitle>
          </CardHeader>
            <h2 className="text-2xl font-bold"> </h2>
            <Button className="bg-blue-500 text-white" variant="secondary">
              <ChromeIcon className="h-5 w-5 text-white" />
              Sign in with Google{"\n"}
            </Button>
          {/* </div> */}
          <CardContent>
          <form className="mt-8 space-y-6">
            <Input placeholder="Email address" type="email" />
            <Input placeholder="Password" type="password" />
            </form>
            </CardContent> 
            <CardFooter>
           <div className="flex items-center mt-6">
              <Checkbox id="remember-me" />
              <label className="ml-2 block text-sm leading-5 text-gray-900" htmlFor="remember-me">
                Remember me
              </label>
              <Link to="#"className="text-sm ml-16 text-blue-600 hover:underline" >
                Forgot Password?
              </Link>
            </div>
            
          </CardFooter>
            <Button className="w-1/2 bg-blue-600 text-white">Sign In</Button>
          
          <p className="mt-6 mb-6 text-center text-sm leading-5 text-gray-600">
            Don't have an account?
            <Link to="/" className="ml-1 text-blue-600 hover:underline " >
              Sign Up
            </Link>
          </p>
        {/* </div> */}
        </Card>
      </div>
    </div>
  )
}


function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}
