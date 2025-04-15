"use client";

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
  
import { Activity, ArrowRight, Moon, Sun, Check, Bell, Clock, Server } from 'lucide-react';
import { usePathname } from "next/navigation";

//   export function Appbar() {
//     return <div className="flex justify-between items-center p-4">
//             <div>Decent Uptime</div>
//             <div>
//                 <SignedOut>
//                     <SignInButton />
//                     <SignUpButton />
//                 </SignedOut>
//                 <SignedIn>
//                     <UserButton />
//                 </SignedIn>
//             </div>
//         </div>
//   }

export function Appbar() {
    const pathname = usePathname(); // Get current route

  // Do not render Appbar if the user is on the /dashboard page
  if (pathname === "/dashboard") {
    return null;
  }
    return (
      <nav className="border-b dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Symbol and App Name */}
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xl font-bold">DecentUptime</span>
            </div>
  
            {/* Signed In/Out Actions */}
            <div className="flex items-center space-x-6">
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  