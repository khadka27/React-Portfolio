// "use client";
// import React from "react";
// import Link from "next/link";

// function Navbar({ className = "" }) {
//   return (
//     <nav className={`bg-gray-800 p-4 animate-fadeIn ${className}`}>
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo or Brand */}
//         <Link href="/" legacyBehavior>
//           <a className="text-white text-2xl font-bold hover:text-gray-300 transition duration-300 ease-in-out">
//             Your Logo
//           </a>
//         </Link>
//         {/* <nav className={`bg-gray-800 p-4 animate-fadeIn ${className}`}>
//       <div className="container mx-auto flex justify-between items-center"> */}
//         <ul className="flex space-x-6">
//           <li>
//             <Link href="#home" legacyBehavior>
//               <a className="text-white text-lg hover:text-gray-300 transition duration-300 ease-in-out">
//                 Home
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="#about" legacyBehavior>
//               <a className="text-white text-lg hover:text-gray-300 transition duration-300 ease-in-out">
//                 About
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="#project" legacyBehavior>
//               <a className="text-white text-lg hover:text-gray-300 transition duration-300 ease-in-out">
//                 Projects
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="#contact" legacyBehavior>
//               <a className="text-white text-lg hover:text-gray-300 transition duration-300 ease-in-out">
//                 Contact
//               </a>
//             </Link>
//           </li>
//         </ul>
//         <div>
//           <Link href="#get-started" legacyBehavior>
//             <a className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out">
//               Get Started with Me
//             </a>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const handleSetActive = (link: string) => {
    setActive(link);
  };

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-full sm:max-w-2xl mx-auto z-50 bg-black rounded-lg p-3 animate-fadeIn",
        className
      )}
    >
      <div className="flex justify-between items-center flex-wrap">
        <Link href="#home" legacyBehavior>
          <a
            onClick={() => handleSetActive("#home")}
            className={cn("p-2", {
              "text-white": active === "#home",
              "text-gray-400": active !== "#home",
            })}
          >
            Home
          </a>
        </Link>

        <Link href="#about" legacyBehavior>
          <a
            onClick={() => handleSetActive("#about")}
            className={cn("p-2", {
              "text-white": active === "#about",
              "text-gray-400": active !== "#about",
            })}
          >
            About
          </a>
        </Link>

        <Link href="#project" legacyBehavior>
          <a
            onClick={() => handleSetActive("#project")}
            className={cn("p-2", {
              "text-white": active === "#project",
              "text-gray-400": active !== "#project",
            })}
          >
            Projects
          </a>
        </Link>

        <Link href="#contact" legacyBehavior>
          <a
            onClick={() => handleSetActive("#contact")}
            className={cn("p-2", {
              "text-white": active === "#contact",
              "text-gray-400": active !== "#contact",
            })}
          >
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
