
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../ui/card";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";



export function Opportunity(props) {
    
  return (
    <Card className="w-1/2 mx-auto">
      <CardHeader className="space-y-2">
        <div className="flex items-center">
          <img
            alt="Hackathon Logo"
            className="mr-2"
            height="40"
            src={props.dummyOpportunityData.logo}
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">{props.dummyOpportunityData.title}</CardTitle>
        </div>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          {props.dummyOpportunityData.registrationEnd}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:gap-8 lg:gap-12">
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Timeline</h2>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
              {props.dummyOpportunityData.timeline.map((phase, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="text-base font-semibold">{phase.phase}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{phase.description}</p>
                  <Button size="sm">Results</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {props.dummyOpportunityData.description}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Mode</h2>
            <p className="text-gray-500 dark:text-gray-400">{props.dummyOpportunityData.mode}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Rewards</h2>
            <p className="text-gray-500 dark:text-gray-400">{props.dummyOpportunityData.rewards}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">FAQs</h2>
            <div className="grid gap-2">
              {props.dummyOpportunityData.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-base font-semibold">{faq.question}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Organizer Contact</h2>
            <p className="text-gray-500 dark:text-gray-400">{props.dummyOpportunityData.organizerContact}</p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}


