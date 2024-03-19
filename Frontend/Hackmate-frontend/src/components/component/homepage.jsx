/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tuyTf1VGbTz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from 'react-router-dom';

export  function Home() {
  return (
    <nav className="flex h-14 w-full items-center px-4 md:px-6 border-b border-gray-200 dark:border-gray-800">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
        <img alt="Hackmate Logo" className="h-8 w-8" src="/placeholder.svg" />
        Hackmate
      </Link>
      <div className="ml-auto flex items-center gap-4">
        <Link className="flex items-center gap-1 text-sm font-medium [&:hover]:underline" href="#">
          <HomeIcon className="h-4 w-4" />
          Home
        </Link>
        <Link className="flex items-center gap-1 text-sm font-medium [&:hover]:underline" href="#">
          <UserIcon className="h-4 w-4" />
          Profile
        </Link>
      </div>
    </nav>
  )
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
