// "use client";
// import Image from "next/image";
// import AboutImage from "./Images/about1.png"; // Adjust the path to your image
// import { motion } from "framer-motion";
// import { AnimatedTooltipPreview } from "./socialmedia";
// import { FlipWord } from "./HomepageText";

// const MotionImage = motion(Image);

// function Home() {
//   return (
//     <section className="bg-white dark:bg-gray-900 h-[100">
//       {/* logo */}
//       <div className="flex items-center justify-between max-w-6xl p-4 mx-1 md:p-8 lg:p-12">
//         <a
//           href="/"
//           className="text-xl font-bold text-gray-800 dark:text-gray-200"
//         >
//           <span className="text-blue-600">Abishek </span> Khadka
//         </a>
//         <button className="p-1 text-gray-800 rounded-full dark:text-gray-200">
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>
//       </div>
//       <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
//         <div className="lg:col-span-7">
//           <FlipWord />
//           <AnimatedTooltipPreview />
//         </div>
//       </div>
//       <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
//         <MotionImage
//           src={AboutImage}
//           alt="About"
//           className="rounded-full h-[75%] w-[50%] border-4 border-sky-500"
//           initial={{ borderColor: "rgba(0, 255, 255, 1)" }}
//           animate={{
//             borderColor: ["rgba(0, 255, 255, 1)", "rgba(0, 255, 255, 0)"],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           width={500}
//           height={500}
//         />
//       </div>
//     </section>
//   );
// }

// export default Home;

"use client";
import Image from "next/image";
import AboutImage from "./Images/about1.png"; // Adjust the path to your image
import { motion } from "framer-motion";
import { AnimatedTooltipPreview } from "./socialmedia";
import { FlipWord } from "./HomepageText";
import { TypewriterEffectSmoothDemo } from "./HomeText";

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
            className="rounded-full border-4 border-sky-500 h-[75%] w-[50%]"
            initial={{ borderColor: "rgba(0, 255, 255, 1)" }}
            animate={{
              borderColor: ["rgba(0, 255, 255, 1)", "rgba(0, 255, 255, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            width={300}
            height={300}
          />
        </div>
        <div className="lg:col-span-7">
          <TypewriterEffectSmoothDemo />
          <AnimatedTooltipPreview />
        </div>
        <div className="hidden lg:flex lg:col-span-5 justify-center items-center ">
          <MotionImage
            src={AboutImage}
            alt="About"
            className="rounded-full border-4 border-sky-500 h-[75%] w-[50%]"
            initial={{ borderColor: "rgba(0, 255, 255, 1)" }}
            animate={{
              borderColor: ["rgba(0, 255, 255, 1)", "rgba(0, 255, 255, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
