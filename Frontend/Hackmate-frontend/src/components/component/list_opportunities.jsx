// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/iQ3GCtMCGn8
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Card } from "../ui/card";
// import { Button } from "../ui/button";

// export  function ListOpportunities() {
//   return (
//     <div className="grid w-full min-h-screen items-center justify-center gap-4 px-4 pb-4 md:gap-10">
//       <div className="container grid gap-4 py-8 md:py-16">
//         <div className="space-y-2">
//           <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Opportunities</h1>
//           <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
//             Explore the latest opportunities available for you.
//           </p>
//         </div>
//         <div className="grid gap-4">
//           <Card>
//             <div className="flex gap-4 p-4 ">
//               <div className="">
//                 <img
//                   alt="Logo"
//                   className="aspect-[2/1] overflow-hidden rounded-full  border-green-500 object-contain object-center "
//                   height="60"
//                   src="/placeholder.svg"
//                   width="120"
//                 />
//               </div>
//               <div className="grid gap-2 text-sm">
//                 <h2 className="text-lg font-semibold">Hackathon 2024</h2>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Organized by: Acme Inc</p>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Rewards: $10,000 in prizes</p>
//               </div>
//             </div>
//             <div className="p-4">
//             <Button variant="default">Interested</Button>
//             </div>
//           </Card>
//           <Card>
//             <div className="grid gap-4 p-4 md:grid-cols-2">
//               <div className="flex items-center justify-center p-4 md:p-8">
//                 <img
//                   alt="Logo"
//                   className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
//                   height="60"
//                   src="/placeholder.svg"
//                   width="120"
//                 />
//               </div>
//               <div className="grid gap-2 text-sm">
//                 <h2 className="text-lg font-semibold">Internship Program</h2>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Organized by: ABC Corporation</p>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Rewards: Real-world experience</p>
//               </div>
//             </div>
//             <div className="p-4">
//             <Button variant="default">Interested</Button>
//             </div>
//           </Card>
//           <Card>
//             <div className="grid gap-4 p-4 md:grid-cols-2">
//               <div className="flex items-center justify-center p-4 md:p-8">
//                 <img
//                   alt="Logo"
//                   className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
//                   height="60"
//                   src="/placeholder.svg"
//                   width="120"
//                 />
//               </div>
//               <div className="grid gap-2 text-sm">
//                 <h2 className="text-lg font-semibold">Volunteer Opportunity</h2>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Organized by: Community Center</p>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Rewards: Making a difference</p>
//               </div>
//             </div>
//             <div className="p-4">

//              <Button variant="default">Interested</Button>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

import { useState } from 'react';
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export function ListOpportunities() {
  const [opportunities] = useState([
    {
      id: 1,
      title: 'Hackathon 2024',
      organizer: 'Acme Inc',
      rewards: '$10,000 in prizes',
      logoUrl: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Internship Program',
      organizer: 'ABC Corporation',
      rewards: 'Real-world experience',
      logoUrl: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Volunteer Opportunity',
      organizer: 'Community Center',
      rewards: 'Making a difference',
      logoUrl: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Hackathon D ',
      organizer: 'center',
      rewards: 'Making a difference',
      logoUrl: '/placeholder.svg'
    }
  ]);

  return (
    <div className="grid w-full min-h-screen items-center justify-center gap-4 px-4 pb-4 md:gap-10">
      <div className="container grid gap-4 py-8 md:py-16">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Opportunities</h1>
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Explore the latest opportunities available for you.
          </p>
        </div>
        <div className="grid gap-4">
          {opportunities.map(opportunity => (
            <Card key={opportunity.id}>
              <div className="flex gap-4 p-4 ">
                <div className="">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-full  border-green-500 object-contain object-center "
                    height="60"
                    src={opportunity.logoUrl}
                    width="120"
                  />
                </div>
                <div className="grid gap-2 text-sm">
                  <h2 className="text-lg font-semibold">{opportunity.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Organized by: {opportunity.organizer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Rewards: {opportunity.rewards}</p>
                </div>
              </div>
              <div className="p-4">
                <Button variant="default" className="bg-gray-300 rounded-md">Interested</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
