import React, { useState } from 'react';

export function HeartIcon ()  {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={isFilled ? 'red' : 'none'}
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={handleClick}
      className="w-6 h-6 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4C6.47 4 2 8.48 2 13c0 3.86 3.41 7.28 8.68 11.14a1.993 1.993 0 002.64 0C18.59 20.28 22 16.86 22 13c0-4.52-4.47-9-10-9z"
      />
    </svg>
  );
};

