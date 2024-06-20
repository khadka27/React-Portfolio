"use client";
import Image from "next/image";
import AboutImage from "./Images/about1.png"; // Adjust the path to your image
import { motion } from "framer-motion";
import { AnimatedTooltipPreview } from "./socialmedia";
import Typewriter from "typewriter-effect";

const MotionImage = motion(Image);

function Home() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-1">
      {/* logo and navbar */}
      <div className="flex items-center justify-between max-w-6xl p-1 mx-1 md:p-8 lg:p-12">
        <a
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-gray-200"
        >
          <span className="text-blue-600">Abishek </span> Khadka
        </a>
      </div>

      {/* Main content */}
      <div className="grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        {/* Mobile image */}
        <div className="flex justify-center lg:hidden mt-10">
          <MotionImage
            src={AboutImage}
            alt="About"
            className="rounded-full border-4 border-sky-500 h-64 w-64"
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
            <span >Abishek Khadka</span>
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
        <div className="hidden lg:flex lg:col-span-5 justify-center items-center ">
          <MotionImage
            src={AboutImage}
            alt="About"
            className="rounded-full border-4 border-sky-500 h-[80%] w-[50%]"
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
}

export default Home;
