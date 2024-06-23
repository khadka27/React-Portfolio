"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import DarkModeToggle from "./DarkModeToggle";

// Utility function to conditionally join class names
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

function Navbar({ className = "" }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSetActive = (link: string) => {
    setActive(link);
    setIsOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(
        "fixed top-2 inset-x-0 max-w-full sm:max-w-2xl mx-auto z-50 bg-black dark:bg-gray-200 rounded-lg p-3 shadow-lg transition duration-300 mt-auto sm:mt-4",
        className
      )}
    >
      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Link href="#home" legacyBehavior>
            <a
              onClick={() => handleSetActive("#home")}
              className={cn(
                "p-2 font-semibold transition duration-300",
                active === "#home"
                  ? "text-sky-600 dark:text-sky-500"
                  : "text-gray-300 dark:text-gray-600"
              )}
            >
              Home
            </a>
          </Link>
          <button
            className="sm:hidden p-2 focus:outline-none transition duration-300"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <XIcon className="h-6 w-6 text-white dark:text-black" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white dark:text-black" />
            )}
          </button>
        </div>

        <div
          className={cn(
            "sm:flex flex-row items-center w-full sm:w-auto transition duration-300",
            isOpen ? "block" : "hidden sm:flex"
          )}
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
          >
            <Link href="#about" legacyBehavior>
              <a
                className={cn(
                  "p-2 font-semibold transition duration-300",
                  active === "#about"
                    ? "text-sky-600 dark:text-sky-500"
                    : "text-gray-300 dark:text-gray-600",
                  "hover:text-sky-500 dark:hover:text-sky-400"
                )}
              >
                About
              </a>
            </Link>

            {isHovered && (
              <div className="absolute left-0 mt-2 flex flex-col space-y-2 bg-black dark:bg-gray-200 p-4 rounded shadow-lg border-white">
                <Link href="#skills" legacyBehavior>
                  <a className="p-2 text-gray-100 dark:text-gray-800 hover:text-sky-500 dark:hover:text-sky-400">
                    Skills
                  </a>
                </Link>
                <Link href="#projects" legacyBehavior>
                  <a className="p-2 text-gray-100 dark:text-gray-800 hover:text-sky-500 dark:hover:text-sky-400">
                    Projects
                  </a>
                </Link>
              </div>
            )}
          </div>

          <Link href="#contact" legacyBehavior>
            <a
              onClick={() => handleSetActive("#contact")}
              className={cn(
                "p-2 font-semibold transition duration-300",
                active === "#contact"
                  ? "text-sky-600 dark:text-sky-500"
                  : "text-gray-300 dark:text-gray-600"
              )}
            >
              Contact
            </a>
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
