
import React from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../ui/card";
import { Button } from "../ui/button";
import { Link, useParams, useLocation } from "react-router-dom";

export function Opportunity(props) {
  const location = useLocation();

  const getCurrentPath = () => {
    const currentPath = location.pathname;
    return currentPath.endsWith('/') ? currentPath : currentPath + '/';
  };

  return (
    <div>
      <Link to={`${getCurrentPath()}register_team`}><Button>Register as Leader</Button></Link>
      <Link to={`${getCurrentPath()}join_team`}><Button>Join A Team</Button></Link>
      <Card className="w-1/2 mx-auto">
        <CardHeader className="space-y-2">
          <div className="flex items-center">
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">{props.OpportunityData.name}</CardTitle>
          </div>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            {props.OpportunityData.regDeadline}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:gap-8 lg:gap-12">
        <h2 className="text-lg font-semibold">Timeline</h2>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
            <h2 className="text-lg font-semibold">Timeline</h2>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
              {props.rd.map((round, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="text-base font-semibold">{round.description}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{round.resultDate}</p>
                  <Button size="sm">Results</Button>
                </div>
              ))}
            </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {props.OpportunityData.description}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Mode</h2>
            <p className="text-gray-500 dark:text-gray-400">{props.OpportunityData.mode}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Rewards</h2>
            <p className="text-gray-500 dark:text-gray-400">{props.OpportunityData.rewards}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">FAQs</h2>
            <div className="grid gap-2">
              {props.OpportunityData.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-base font-semibold">{faq}</h3>
                  
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Organizer Contact</h2>
            <p className="text-gray-500 dark:text-gray-400">{props.OpportunityData.contactDetails}</p>
          </CardContent>
        </Card>
      </CardContent>
      {/* <button onClick={}></button> */}
    </Card>
  );
}

// import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../ui/card";
// import { Button } from "../ui/button";
// import { Link, useParams } from "react-router-dom";



// export function Opportunity(props) {
//   // console.log(props.OpportunityData)
//   return (
//     <div>
//     <Link to = "/register_team" > <Button>Register as Leader </Button> </Link>
//     <Link to = "/join_team" > <Button>Join A Team </Button> </Link>
//     <Card className="w-1/2 mx-auto">
//       <CardHeader className="space-y-2">
//         <div className="flex items-center">
//           <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">{props.OpportunityData.name}</CardTitle>
//         </div>
//         <CardDescription className="text-gray-500 dark:text-gray-400">
//           {props.OpportunityData.regDeadline}
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-4 md:gap-8 lg:gap-12">
//         <Card>
//           <CardContent className="space-y-2">
//             <h2 className="text-lg font-semibold">Timeline</h2>
//             <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
//               {/* {
//                 props.rd.map((description, resultDate, id) => (
//                   <div key={id} className="space-y-1">
//                     <h3 className="text-base font-semibold">{description}</h3>
//                     <p className="text-xs text-gray-500 dark:text-gray-400">{resultDate}</p>
//                     <Button size="sm">Results</Button>
//                   </div>
//                 ))
//               } */}
//             </div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="space-y-2">
//             <h2 className="text-lg font-semibold">Description</h2>
//             <p className="text-gray-500 dark:text-gray-400">
//               {props.OpportunityData.description}
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="space-y-2">
//             <h2 className="text-lg font-semibold">Mode</h2>
//             <p className="text-gray-500 dark:text-gray-400">{props.OpportunityData.mode}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="space-y-2">
//             <h2 className="text-lg font-semibold">Rewards</h2>
//             <p className="text-gray-500 dark:text-gray-400">{props.OpportunityData.rewards}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="space-y-2">
//             <h2 className="text-lg font-semibold">FAQs</h2>
//             <div className="grid gap-2">
//               {/* {props.OpportunityData.faqs.map((faq, index) => (
//                 <div key={index}>
//                   <h3 className="text-base font-semibold">{faq.question}</h3>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">{faq.answer}</p>
//                 </div>
//               ))} */}
//             </div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="space-y-2">
//             <h2 className="text-lg font-semibold">Organizer Contact</h2>
//             <p className="text-gray-500 dark:text-gray-400">{props.OpportunityData.contactDetails}</p>
//           </CardContent>
//         </Card>
//       </CardContent>
//       {/* <button onClick={}></button> */}
//     </Card>
//     </div>
//   );
// }


