/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uKVqpj2i12K
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Link} from'react-router-dom'

export default function Component() {
  return (
    <footer className="bg-[#252525] text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <span className="text-purple-500 font-bold text-lg">T</span>
            <span className="font-bold text-lg">react</span>
          </div>
          <div className="flex space-x-4 mb-6">
            <Link className="hover:text-gray-300" href="#">
              Home
            </Link>
            <Link className="hover:text-gray-300" href="#">
              About
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Contact Us
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Blog
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Reviews
            </Link>
          </div>
          <div className="flex space-x-4 mb-6">
            <FacebookIcon className="h-6 w-6 hover:text-gray-300" />
            <TwitterIcon className="h-6 w-6 hover:text-gray-300" />
            <YoutubeIcon className="h-6 w-6 hover:text-gray-300" />
          </div>
          <div className="text-sm">© Copyright 2020, Treact Inc. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
