import React from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../ui/card";
import { Button } from "../ui/button";

export function Opportunity(props) {
  const { OpportunityData } = props;

  if (!OpportunityData) {
    return <div>Loading...</div>;
  }

  console.log(OpportunityData);

  return (
    <Card className="w-1/2 mx-auto">
      <CardHeader className="space-y-2">
        <div className="flex items-center">
          <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {OpportunityData.name}
          </CardTitle>
        </div>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Registration Deadline: {new Date(OpportunityData.regDeadline).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:gap-8 lg:gap-12">
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Timeline</h2>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
              {OpportunityData.timeline.map((round, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="text-base font-semibold">{round.description}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Result Date: {new Date(round.resultDate).toLocaleDateString()}
                  </p>
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
              {OpportunityData.description}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Mode</h2>
            <p className="text-gray-500 dark:text-gray-400">{OpportunityData.mode}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Rewards</h2>
            <p className="text-gray-500 dark:text-gray-400">{OpportunityData.rewards}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">FAQs</h2>
            <div className="grid gap-2">
              {OpportunityData.FAQs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-base font-semibold">{faq.question}</h3>
                  <h3 className="text-base">{faq.answer}</h3>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Organizer Contact</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {OpportunityData.contactDetails}
            </p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
