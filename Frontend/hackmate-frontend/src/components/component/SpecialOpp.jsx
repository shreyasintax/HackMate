/**
 * v0 by Vercel.
 * @see https://v0.dev/t/v58nOr73dYH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../ui/card"
import { Button } from "../ui/button"

export function SpecialOpp() {
  return (
    <div className="bg-white p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Popular Hackathons</h2>
      <div className="flex justify-between items-center mb-6">
        <ChevronLeftIcon className="text-purple-500 w-6 h-6" />
        <ChevronRightIcon className="text-purple-500 w-6 h-6" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card className="w-full">
          <img
            alt="Wyatt Residency"
            className="rounded-t-lg"
            height="200"
            src="/hacakthon.jpg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardHeader>
            <CardTitle>Productathon</CardTitle>
            <div className="flex items-center">
              <StarIcon className="text-yellow-400 w-5 h-5" />
              <span className="text-lg text-yellow-600 font-semibold">4.8</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>
                <LocateIcon className="w-4 h-4 mr-1" />
                NIT Kurukshetra
              </span>
              <span>
                Coding Challenge
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-500 text-white">Book Now</Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <img
            alt="Productathon"
            className="rounded-t-lg"
            height="200"
            src="/hackathon2.jpg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardHeader>
            <CardTitle>Hackshetra</CardTitle>
            <div className="flex items-center">
              <StarIcon className="text-yellow-400 w-5 h-5" />
              <span className="text-lg text-yellow-600 font-semibold">4.9</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>
                <LocateIcon className="w-4 h-4 mr-1" />
                IIT Delhi
              </span>
              <span>
    
                Hackathon
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-500 text-white">Book Now</Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <img
            alt="Hackshetra"
            className="rounded-t-lg"
            height="200"
            src="/hackathon3.jpeg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardHeader>
            <CardTitle>B-Plan</CardTitle>
            <div className="flex items-center">
              <StarIcon className="text-yellow-400 w-5 h-5" />
              <span className="text-lg text-yellow-600 font-semibold">5.0</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>
                <LocateIcon className="w-4 h-4 mr-1" />
                NIT Kurukshetra
              </span>
              <span>
                Case Study Challenge
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-500 text-white">Book Now</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
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
