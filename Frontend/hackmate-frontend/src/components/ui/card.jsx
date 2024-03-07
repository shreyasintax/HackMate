import React from "react";

import { cn } from "../../lib/utils";

const Card = ({ className, children, ...props }) => (
  <div
    className={cn(
      "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
Card.displayName = "Card";

const CardHeader = ({ className, children, ...props }) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  >
    {children}
  </div>
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({ className, children, ...props }) => (
  <h3
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </h3>
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({ className, children, ...props }) => (
  <p
    className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  >
    {children}
  </p>
);
CardDescription.displayName = "CardDescription";

const CardContent = ({ className, children, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
);
CardContent.displayName = "CardContent";

const CardFooter = ({ className, children, ...props }) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  >
    {children}
  </div>
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
};
