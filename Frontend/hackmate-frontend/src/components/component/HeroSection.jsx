/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uvZCDYZHIus
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Logout from "./LogoutButton";

export function HeroSection() {
  const isAuthenticated = localStorage.getItem('jwtToken') !== null;
  console.log(isAuthenticated);
  return (
      
    <div className="relative bg-[#CFF5E7] bg-cover   text-[#0D4C92]">
      {/* <div className="absolute inset-0 bg-[#101010] opacity-50   "></div> */}
      <nav className="sticky top-0 bg-[#0D4C92] w-full z-10">
  <div className="mx-24 px-4  flex justify-between items-center">
    {/* logo and search */}
    <div className="flex gap-3 item-center">
       <img src="logo.png" className="h-20"></img>
       {/* search button */}
       <div className='max-w-md mx-auto my-auto'>
    <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-[#CFF5E7] overflow-hidden cursor-pointer">
        <div className="grid place-items-center h-full w-12 text-[#0D4C92]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-full w-full outline-none text-sm text-[#0D4C92] pr-2 bg-[#CFF5E7]"
        type="text"
        id="search"
        placeholder="Search opportunities..." /> 
    </div>
</div>
      
       </div>
       <div className="hidden md:flex space-x-8 items-center">
       
       <Link to = "/about">
       <span className="hidden md:block text-[#CFF5E7] hover:text-[#59C1BD]">About</span>
       </Link>
       <Link to = "/list_opportunities">
       <span className="hidden md:block text-[#CFF5E7] hover:text-[#59C1BD]">Explore</span>
       </Link>
       <Link to = "/opportunity_list">
       <span className="hidden md:block text-[#CFF5E7] hover:text-[#59C1BD]">Host</span>
       </Link>
       <Link to = "/login">
       <span className="hidden md:block  text-[#CFF5E7] hover:text-[#59C1BD]">Login</span>
       </Link>
       <Link to = "/opportunity_list">
       <span className="hidden md:block text-[#CFF5E7] text-3xl hover:text-[#59C1BD]"><i class="fa-regular fa-bell" ></i></span>
       </Link>
       <Link to = "/profile">
       <span className="hidden md:block text-[#CFF5E7] text-3xl hover:text-[#59C1BD]"><i class="fa-regular fa-user"></i></span>
       </Link>
       {isAuthenticated? <Logout/> : <></>}
       </div>
      
     </div>
     </nav>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 ml-24 ">
            <div className="text-sm uppercase tracking-wide">Hack Your Way To Win</div>
            <h1 className="text-5xl font-bold leading-tight mt-4">
              Find Your Dream
              <br />
              Hackathon Team.{"\n                  "}
            </h1>
            <Button className="mt-8 bg-white text-[#5c2d91]">Read User Stories</Button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="relative">
              <img
                alt="Marketing Team"
                className="rounded-lg shadow-lg"
                height="400"
                src="/home.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  
  )
}


