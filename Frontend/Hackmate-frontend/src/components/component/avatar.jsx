import React from 'react';
import { Root, Image, Fallback } from '@radix-ui/react-avatar';
import { cn } from '../../lib/utils';

const Avatar = ({ className, ...props }) => (
  <Root
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
);

const AvatarImage = ({ className, ...props }) => (
  <Image
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
);

const AvatarFallback = ({ className, ...props }) => (
  <Fallback
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800",
      className
    )}
    {...props}
  />
);

export { Avatar, AvatarImage, AvatarFallback };