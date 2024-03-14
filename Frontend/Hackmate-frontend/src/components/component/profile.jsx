// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../ui/select"
// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { Textarea } from "../ui/textarea";
// import { AvatarImage, AvatarFallback, Avatar } from "../component/avatar"

// export function Profile({user, children}) {
//   return (


//     (<div className="w-full bg-gray-100 ">
//         <div className="w-10/12 mx-auto p-6">
//       <div className="flex flex-col lg:flex-row lg:space-x-8">
//         <div className="flex-col w-1/2 bg-white p-4 rounded-lg mt-4">

//           <div className="flex items-center space-x-4 mb-4">
//             <Avatar>
//               <AvatarImage alt="Profile Picture" src="/placeholder.svg?height=100&width=100" />
//               <AvatarFallback>JS</AvatarFallback>
//             </Avatar>
//             <div>
//               <h1 className="text-2xl font-semibold">{user}</h1>
//               <p className="text-sm text-gray-500">Username</p>
//             </div>
//           </div>
//           <div className="space-y-4">
//             <div>
//               <h2 className="font-semibold text-lg">General Interests (Themes)</h2>
//               <p className="text-sm">#event-marketing #performance-marketing</p>
//             </div>
//             <div>
//               <h2 className="font-semibold text-lg">Education</h2>
//               <p className="text-sm">Graduation Year: 2024</p>
//               <p className="text-sm">Degree: Bachelor of Science in Marketing</p>
//               <p className="text-sm">College Name: Oxford International</p>
//             </div>
//             <div>
//               <h2 className="font-semibold text-lg">Skills</h2>
//               <ul>
//               <h3  className="font-semibold text-base text-gray-500">Hard Skills</h3>
//               <p className="text-sm">Next.js , react.js</p>
//               <h3  className="font-semibold text-base text-gray-500"> Soft Skills</h3>
//               <p className="text-sm">Communication, Teamwork, Problem-solving</p>
//               </ul>
//             </div>

//             <div>
//               <h2 className="font-semibold text-lg">Personal Info</h2>
//               <p className="text-sm">DOB: January 1, 1990</p>
//               <p className="text-sm">Gender: Male</p>
//               <p className="text-sm">Username: johnsmith</p>
//               <p className="text-sm">Contact No: (123) 456-7890</p>
//             </div>
//             <div>
//               <h2 className="font-semibold text-lg">Location</h2>
//               <p className="text-sm">City: Virginia</p>
//               <p className="text-sm">State: NY</p>
//               <p className="text-sm">Pincode: 12345</p>
//             </div>
//             </div>



//         </div>
//         <div className="flex-col w-1/2">
//         <div className="flex-col">

//             <div className="bg-white p-4 rounded-lg mt-4">
//               <h2 className="font-semibold text-lg mb-4">Intro</h2>

//               <p className="text-sm mb-3 flex gap-2 items-center"><i class="fa-solid fa-building-columns"></i><span className="text-gray-500">Went to </span> Oxford International</p>
//               <p className="text-sm mb-3 flex gap-2 items-center"><i class="fa-solid fa-location-dot"></i><span className="text-gray-500">Lives in </span> Virginia, NY</p>
//               <div className="flex  items-center gap-2 mb-3">
//               <i class="fa-regular fa-envelope"></i>
//                 <span className="text-gray-500"> Email</span>
//               <Link className="block text-sm   text-blue-600" href="#">
//                 jhon@contact.com
//               </Link></div>
//               <div className="flex gap-2  items-center mb-3"><i class="fa-brands fa-linkedin"></i><span className="text-gray-500">LinkedIn</span>

//               <Link t0="#" className="block text-sm text-blue-600" >
//                  @jhon_S
//               </Link></div><div className="flex gap-2   items-center mb-3">
//               <i class="fa-brands fa-github"></i>
//                 <span className="text-gray-500">Github</span>

//               <Link className="block text-sm text-blue-600" href="#">
//                  github.com/johnsmith
//               </Link></div>


//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg mt-4">
//             <div>
//   <h2 className="font-semibold text-lg mb-2">About</h2>
// <Textarea className="mb-2" placeholder="Description"></Textarea>
// </div>
// <div>
// <h2 className="font-semibold text-lg mb-2">Achievements</h2>
// <Textarea className="mb-2" placeholder="Achivements"></Textarea>
// </div>
// <div>
// <h2 className="font-semibold text-lg mb-2">Hackathons</h2>
// <Textarea className="mb-2" placeholder="Hackathons" ></Textarea>
// </div> 
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>)
//   );
// }
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Textarea } from "../ui/textarea";
import { AvatarImage, AvatarFallback, Avatar } from "../component/avatar";
import { Button } from '../ui/button';

export function Profile({ user, children }) {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Dummy profile data
    const dummyData = {
      name: "John Smith",
      interests: "#event-marketing #performance-marketing",
      graduationYear: "2024",
      degree: "Bachelor of Science in Marketing",
      collegeName: "Oxford International",
      skills: ["Next.js", "React.js", "Communication", "Teamwork", "Problem-solving", "ppcbdjhv"],
      Email: "john@gmail.com",
      Linkedin: "@jhon_S",
      Github: "@jhon_S",
      personalInfo: {
        DOB: "January 1, 1990",
        Gender: "Male",
        Username: "johnsmith",
        ContactNo: "(123) 456-7890",

      },
      location: {
        City: "Virginia",
        State: "NY",
        Pincode: "12345"
      }

    };

    // Set the dummy profile data
    setProfileData(dummyData);
  }, []);

  return (
    <div className="w-full bg-gray-100 ">
      <div className="w-10/12 mx-auto p-6">
        {profileData && (
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="flex-col w-1/2 bg-white p-4 rounded-lg mt-4">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage alt="Profile Picture" src="/placeholder.svg?height=100&width=100" />
                  <AvatarFallback>{user}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-semibold">{profileData.name}</h1>
                  <p className="text-sm text-gray-500">Username</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h2 className="font-semibold text-lg">General Interests (Themes)</h2>
                  <p className="text-sm">{profileData.interests}</p>
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Education</h2>
                  <p className="text-sm">Graduation Year: {profileData.graduationYear}</p>
                  <p className="text-sm">Degree: {profileData.degree}</p>
                  <p className="text-sm">College Name: {profileData.collegeName}</p>
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Skills</h2>
                  {/* display skills */}
                  <div className="space-x-2 space-y-2">

                    {profileData.skills.map((skill, index) => (
                      <Button key={index} className="text-sm rounded-lg border-gray-500" variant="outline">{skill}</Button>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Personal Info</h2>
                  {/* Display personal info */}
                  {Object.entries(profileData.personalInfo).map(([key, value]) => (
                    <p key={key} className="text-sm">{key}: {value}</p>
                  ))}
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Location</h2>
                  {/* Display location */}
                  {Object.entries(profileData.location).map(([key, value]) => (
                    <p key={key} className="text-sm">{key}: {value}</p>
                  ))}
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
                    <Link className="block text-sm   text-blue-600" href="#">
                      {profileData.Email}
                    </Link></div>
                  <div className="flex gap-2  items-center mb-3"><i class="fa-brands fa-linkedin"></i><span className="text-gray-500">LinkedIn</span>

                    <Link t0="#" className="block text-sm text-blue-600" >
                      {profileData.Linkedin}
                    </Link></div><div className="flex gap-2   items-center mb-3">
                    <i class="fa-brands fa-github"></i>
                    <span className="text-gray-500">Github</span>

                    <Link className="block text-sm text-blue-600" href="#">
                      {profileData.Github}
                    </Link></div>


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
        )}
      </div>
    </div>
  );
}

