/**
 * v0 by Vercel.
 * @see https://v0.dev/t/v58nOr73dYH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useState } from 'react';
import { CardHeader, CardContent, CardFooter, Card } from "../ui/card";
// import { ChevronLeftIcon, ChevronRightIcon } from "../ui/icons";
import { Button } from "../ui/button";

export function SpecialOpp() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 1, totalCards - 3));
  };

  const handlePrevious = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  // Dummy data for demonstration
  const hackathons = [
    { id: 1, name: "Hackathon 1", daysLeft: 5 , desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    { id: 2, name: "Hackathon 2", daysLeft: 4 ,desc:"f vkfkkv"},
    { id: 3, name: "Hackathon 3", daysLeft: 3,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { id: 4, name: "Hackathon 4", daysLeft: 2,desc:"dknfkvnkj" },
    { id: 5, name: "Hackathon 5", daysLeft: 1,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" }
  ];

  const visibleHackathons = hackathons.slice(startIndex, startIndex + 3);
  const totalCards = hackathons.length;

  return (
    <div className="bg-white w-full">
      <div className="bg-white p-8 mx-24">
        <h2 className="text-4xl font-bold text-[#0D4C92] mb-6">Featured Hackathons</h2>
        <div className="flex justify-between items-center mb-6">
          <ChevronLeftIcon className="text-purple-500 w-6 h-6" onClick={handlePrevious} />
          <ChevronRightIcon className="text-purple-500 w-6 h-6" onClick={handleNext} />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {visibleHackathons.map(hackathon => (
            <Card key={hackathon.id} className="w-11/12 mx-auto rounded-tl-3xl rounded-br-3xl h-11/12 rounded-bl-none">
               
          <img
            alt="Wyatt Residency"
            className="rounded-tl-3xl"
            height="150"
            src="/hackathon.jpg"
            style={{
              aspectRatio: "300/150",
              objectFit: "cover",
            }}
            // width="300"
          />
          <CardHeader >
            <div className="flex justify-between">
            <div className="flex gap-2">
              <div>online</div>
              <div>|</div>
              <div>free</div>
            </div>
           <div className=""><i class="fa-regular fa-heart"></i></div>
           </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4 font-bold text-lg">
              {hackathon.desc}
            </p>
          </CardContent>
          <CardFooter className="flex gap-2"><i class="fa-regular fa-clock"></i><div>{hackathon.daysLeft} days left</div></CardFooter>
        </Card>
            
          ))}
        </div>
      </div>
    </div>
  );
}


function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CurrencyIcon(props) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}