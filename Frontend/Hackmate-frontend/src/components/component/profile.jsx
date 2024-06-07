import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Textarea } from "../ui/textarea";
import { AvatarImage, AvatarFallback, Avatar } from "../component/avatar";
import { Button } from '../ui/button';
import { toast } from 'react-toastify';
// import Cookies from 'js-cookie'; // Or use document.cookie


export function Profile({ user, children }) {
  const [profileData, setprofileData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchprofileData = async () => {
            try {
                const response = await fetch('http://localhost:8080/hackmate/v1/user', {
                    method: 'GET', // Explicitly stating the method, though 'GET' is default
                    credentials: 'include', // Essential for sending cookies over CORS
                    headers: {
                        'Content-Type': 'application/json',
                        // any other headers
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data.user);
                setprofileData(data.user);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchprofileData();
    }, []);
    console.log("Profile Data:", profileData);
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!profileData) {
        return <div>Loading profile...</div>;
    }


  return (
    <div className="w-full bg-gray-100 ">
      <div className="w-10/12 mx-auto p-6">
        {profileData && (
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="flex-col w-1/2 bg-white p-4 rounded-lg mt-4">

              <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
              </div>
              <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
              </div>
              <div className="text-center mt-2">
                <h2 className="font-semibold">{profileData?.firstName} {profileData?.lastName}</h2>
                <p className="text-gray-500">username</p>
              </div>
              <div className="space-y-4">
                {/* <div>
                  <h2 className="font-semibold text-lg">General Interests (Themes)</h2>
                  <p className="text-sm">{profileData?.interests}</p>
                </div> */}
                {/* <div>
                  <h2 className="font-semibold text-lg">Education</h2>
                  <p className="text-sm">Graduation Year: {profileData?.graduationYear}</p>
                  <p className="text-sm">Degree: {profileData?.degree}</p>
                  <p className="text-sm">College Name: {profileData?.collegeName}</p>
                </div> */}
                <div>
                  <h2 className="font-semibold text-lg">Hard Skills</h2>
                  {/* display skills */}
                  <div className="space-x-2 space-y-2">

                    {profileData?.hardSkills.map((skill, index) => (
                      <Button key={index} className="text-sm rounded-lg border-gray-500" variant="outline">{skill}</Button>
                    ))}
                  </div>
                </div>
                {/* <div>
                  <h2 className="font-semibold text-lg">Personal Info</h2>
                  
                  {Object.entries(profileData.personalInfo).map(([key, value]) => (
                    <p key={key} className="text-sm">{key}: {value}</p>
                  ))}
                </div> */}
                {/* <div>
                  <h2 className="font-semibold text-lg">Location</h2>
                  
                  {Object.entries(profileData.location).map(([key, value]) => (
                    <p key={key} className="text-sm">{key}: {value}</p>
                  ))}
                </div> */}
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
                      {profileData?.email}
                    </Link></div>
                  {/* <div className="flex gap-2  items-center mb-3"><i class="fa-brands fa-linkedin"></i><span className="text-gray-500">LinkedIn</span>

                    <Link t0="#" className="block text-sm text-blue-600" >
                      {profileData.Linkedin}
                    </Link></div><div className="flex gap-2   items-center mb-3">
                    <i class="fa-brands fa-github"></i>
                    <span className="text-gray-500">Github</span>

                    <Link className="block text-sm text-blue-600" href="#">
                      {profileData.Github}
                    </Link></div> */}


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