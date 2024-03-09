/**
 * 
 * @see https://v0.dev/t/axcVpVZ4xix
 */
import { Label } from "../ui/label";
import { Select } from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function Onboarding() {
  return (
    (<div className="mx-auto max-w-3xl space-y-8 p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight leading-tight">Welcome to the Community</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Let's get to know you better. Complete your profile to join the community.
        </p>
      </div>
      <div className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="interests">General Interests</Label>
          <Select id="interests" multiple>
            <option>Technology</option>
            <option>Art & Design</option>
            <option>Business</option>
            <option>Science</option>
            <option>Health & Fitness</option>
          </Select>
        </div>
        <div className="space-y-2">
          <fieldset className="space-y-2">
            <legend className="font-semibold">College Student</legend>
            <div className="flex items-center space-x-2">
              <input
                className="form-tick appearance-none h-4 w-4 border border-gray-200 border-gray-300 rounded-md checked:bg-blue-600 checked:border-0 dark:border-gray-800"
                id="yes"
                name="college"
                type="radio" />
              <label className="cursor-pointer text-sm font-medium ml-2" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                className="form-tick appearance-none h-4 w-4 border border-gray-200 border-gray-300 rounded-md checked:bg-blue-600 checked:border-0 dark:border-gray-800"
                id="no"
                name="college"
                type="radio" />
              <label className="cursor-pointer text-sm font-medium ml-2" htmlFor="no">
                No
              </label>
            </div>
          </fieldset>
        </div>
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="space-y-2">
            <Label htmlFor="graduation-year">Graduation Year</Label>
            <Select id="graduation-year">
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="degree">Degree</Label>
            <Input id="degree" placeholder="e.g. Computer Science" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="college-name">College Name</Label>
            <Input id="college-name" placeholder="e.g. Harvard University" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="hard-skills">Hard Skills</Label>
          <Select id="hard-skills">
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Product Management</option>
            <option>Design</option>
            <option>Finance</option>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="soft-skills">Soft Skills</Label>
          <Input id="soft-skills" placeholder="Enter your soft skills" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="github">GitHub</Label>
          <Input id="github" placeholder="https://github.com/example" type="url" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input id="linkedin" placeholder="https://linkedin.com/in/example" type="url" />
        </div>
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Enter your city" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="Enter your state" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode</Label>
            <Input id="pincode" placeholder="Enter your pincode" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select id="gender">
            <option>Female</option>
            <option>Male</option>
            <option>Non-binary</option>
            <option>Transgender</option>
            <option>Prefer not to say</option>
          </Select>
        </div>
        <Button className="w-full">Save & Continue</Button>
      </div>
    </div>)
  );
}
