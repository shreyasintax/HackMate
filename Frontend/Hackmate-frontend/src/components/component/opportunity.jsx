/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1gKherEBBar
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../ui/card"
import { Button } from "../ui/button"

export  function Opportunity() {
  return (
    <Card className="w-1/2 mx-auto">
      <CardHeader className="space-y-2">
        <div className="flex items-center">
          <img
            alt="Hackathon Logo"
            className="mr-2"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl">Hackathon 2024</CardTitle>
        </div>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Registration ends on March 15, 2024 at 11:59 PM
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:gap-8 lg:gap-12">
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Timeline</h2>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
              <div className="space-y-1">
                <h3 className="text-base font-semibold">Round 1: Idea Submission</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Submit your project idea</p>
                <Button size="sm">Results</Button>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold">Round 2: Prototype Submission</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Submit your working prototype</p>
                <Button size="sm">Results</Button>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold">Round 3: Final Presentation</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Teams will present their projects</p>
                <Button size="sm">Results</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-500 dark:text-gray-400">
              The Hackathon 2024 is an opportunity for students to showcase their innovative ideas and coding skills.
              Participants will have 24 hours to collaborate and develop a working prototype of their project. The event
              will be judged by a panel of industry experts, and the top teams will receive exciting prizes.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Mode</h2>
            <p className="text-gray-500 dark:text-gray-400">Online</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Rewards</h2>
            <p className="text-gray-500 dark:text-gray-400">1st Place: $1000, 2nd Place: $500, 3rd Place: $250</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">FAQs</h2>
            <div className="grid gap-2">
              <div>
                <h3 className="text-base font-semibold">How many members can be in a team?</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  A team can have a minimum of 2 and a maximum of 4 members.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold">Can I participate individually?</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">No, participation is only allowed in teams.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-semibold">Organizer Contact</h2>
            <p className="text-gray-500 dark:text-gray-400">Email: info@example.com</p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

