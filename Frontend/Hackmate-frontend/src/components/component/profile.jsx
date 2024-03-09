import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../ui/select"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Textarea } from "../ui/textarea";
import { AvatarImage, AvatarFallback, Avatar } from "../component/avatar"

export function Profile() {
  return (

    (<div className="w-full bg-gray-100 ">
        <div className="w-10/12 mx-auto p-6">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-col w-1/2 bg-white p-4 rounded-lg mt-4">
            
          <div className="flex items-center space-x-4 mb-4">
            <Avatar>
              <AvatarImage alt="Profile Picture" src="/placeholder.svg?height=100&width=100" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-semibold">John Smith</h1>
              <p className="text-sm text-gray-500">Username</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold text-lg">General Interests (Themes)</h2>
              <p className="text-sm">#event-marketing #performance-marketing</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Education</h2>
              <p className="text-sm">Graduation Year: 2024</p>
              <p className="text-sm">Degree: Bachelor of Science in Marketing</p>
              <p className="text-sm">College Name: Oxford International</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Skills</h2>
              <ul>
              <h3  className="font-semibold text-base text-gray-500">Hard Skills</h3>
              <p className="text-sm">Next.js , react.js</p>
              <h3  className="font-semibold text-base text-gray-500"> Soft Skills</h3>
              <p className="text-sm">Communication, Teamwork, Problem-solving</p>
              </ul>
            </div>
            
            <div>
              <h2 className="font-semibold text-lg">Personal Info</h2>
              <p className="text-sm">DOB: January 1, 1990</p>
              <p className="text-sm">Gender: Male</p>
              <p className="text-sm">Username: johnsmith</p>
              <p className="text-sm">Contact No: (123) 456-7890</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Location</h2>
              <p className="text-sm">City: Virginia</p>
              <p className="text-sm">State: NY</p>
              <p className="text-sm">Pincode: 12345</p>
            </div>
            </div>
         
          
          
        </div>
        <div className="flex-col w-1/2">
        <div className="flex-col">
        
            <div className="bg-white p-4 rounded-lg mt-4">
              <h2 className="font-semibold text-lg mb-4">Intro</h2>
             
              <p className="text-sm mb-3 flex gap-2 items-center"><i class="fa-solid fa-building-columns"></i><span className="text-gray-500">Went to </span> Oxford International</p>
              <p className="text-sm mb-3 flex gap-2 items-center"><i class="fa-solid fa-location-dot"></i><span className="text-gray-500">Lives in </span> Virginia, NY</p>
              <div className="flex  items-center gap-2 mb-3">
              <i class="fa-regular fa-envelope"></i>
                <span className="text-gray-500"> Email</span>
              <Router><Link className="block text-sm   text-blue-600" href="#">
                jhon@contact.com
              </Link></Router></div>
              <div className="flex gap-2  items-center mb-3"><i class="fa-brands fa-linkedin"></i><span className="text-gray-500">LinkedIn</span>
              <Router>
              <Link t0="#" className="block text-sm text-blue-600" >
                 @jhon_S
              </Link></Router></div><div className="flex gap-2   items-center mb-3">
              <i class="fa-brands fa-github"></i>
                <span className="text-gray-500">Github</span>
              <Router>
              <Link className="block text-sm text-blue-600" href="#">
                 github.com/johnsmith
              </Link></Router></div>
              
           
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg mt-4">
            <div>
  <h2 className="font-semibold text-lg mb-2">About</h2>
<Textarea className="mb-2" placeholder="Description"></Textarea>
</div>
<div>
<h2 className="font-semibold text-lg mb-2">Achievements</h2>
<Textarea className="mb-2" placeholder="Achivements"></Textarea>
</div>
<div>
<h2 className="font-semibold text-lg mb-2">Hackathons</h2>
<Textarea className="mb-2" placeholder="Hackathons" ></Textarea>
</div> 
        </div>
      </div>
    </div>
    </div>
    </div>)
  );
}
