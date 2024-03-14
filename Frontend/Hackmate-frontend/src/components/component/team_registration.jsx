/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eTAY7aQzamm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

export function TeamRegistration() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Team Registration</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to register your team</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="team-name">Team Name</Label>
          <Input id="team-name" placeholder="Team Name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="team-leader">Team Leader</Label>
          <Input id="team-leader" placeholder="Team Leader" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="skills">Skills Preferred</Label>
          <Input id="skills" placeholder="Skills Preferred" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="project-idea">Project Idea</Label>
          <Textarea id="project-idea" placeholder="Project Idea" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Email" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Phone Number" required type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="college">College Name</Label>
          <Input id="college" placeholder="College Name" required />
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </div>
  )
}

