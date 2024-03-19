/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uvZCDYZHIus
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <div className="relative bg-[#5c2d91] text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-white text-[#5c2d91] rounded-full p-2 text-xl font-bold">T</div>
          <div className="ml-4 text-lg font-semibold">HackMate</div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a className="hover:underline" href="#">
            About
          </a>
          <a className="hover:underline" href="#">
            Blog
          </a>
          <a className="hover:underline" href="#">
            Locations
          </a>
          <a className="hover:underline" href="#">
            Pricing
          </a>
        </div>
        <Link to = "/showSignup">
        <Button className="hidden md:block bg-white text-[#5c2d91]">Register</Button>
        </Link>
        <Link to = "/opportunity_list">
        <Button className="hidden md:block bg-white text-[#5c2d91]">Host Opportunity</Button>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
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
                src="/hero.avif"
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


