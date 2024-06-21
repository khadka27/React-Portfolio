"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import AboutImage from "./Images/homepage.png"; // Adjust the path to your image
import logo from "./Images/logo.png"; // Adjust the path to your image

const MotionImage = motion(Image);

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an initial loading delay (e.g., fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulating data fetching)
    }, 2000);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 mt-1">
      {/* logo and navbar */}
      <header className="flex items-center  justify-between max-w-6xl mx-1 lg:p-8 m-0">
        <Image
          src={logo}
          alt="logo"
          width={70}
          height={70}
          className="bg-gray-300 dark:bg-white rounded-full"
        />
      </header>

      {/* Main content */}
      <div className="grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 lg:py-16 lg:grid-cols-12 lg:pt-0">
        {" "}
        {/* Mobile image */}
        <div className="flex justify-center lg:hidden mt-10">
          <MotionImage
            src={AboutImage}
            alt="About"
            className="rounded-full border-4 border-yellow-400 dark:border-sky-500 h-64 w-64"
            initial={{ borderColor: "rgba(0, 255, 255, 1)" }}
            animate={{
              borderColor: ["rgba(0, 255, 255, 1)", "rgba(0, 255, 255, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            width={256}
            height={256}
          />
        </div>
        {/* Main text */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="relative inline-block p-2 border-2 border-transparent rounded-md bg-clip-border bg-gradient-to-r from-red-500 to-yellow-500 animate-border-animation">
            <span>Abishek Khadka</span>
          </h2>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-sky-500 lg:text-5xl flex-col">
            Hello, I&apos;m{" "}
            <Typewriter
              options={{
                strings: [
                  "Abishek Khadka",
                  "Web Developer",
                  "Freelance Writer",
                ],
                deleteSpeed: 50,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 lg:text-xl mr-11">
            I&apos;m a full-stack web developer and a freelance writer. I write
            about web development, technology, and personal development. I also
            love to teach and share my knowledge with others.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="px-4 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Hire me
            </a>
          </div>
        </div>
        {/* Desktop image */}
        <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
          <MotionImage
            src={AboutImage}
            alt="About"
            className="rounded-full border-4 border-sky-500 h-[85%] w-[50%]"
            initial={{ borderColor: "rgba(0, 255, 255, 1)" }}
            animate={{
              borderColor: ["rgba(0, 255, 255, 1)", "rgba(0, 255, 255, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
