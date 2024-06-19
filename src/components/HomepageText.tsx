import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWord() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[5rem] flex justify-center items-center px-4 mb-[50px]">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
        <div className="">
          <p>
            Aceternity UI is a collection of modern, beautiful, and responsive
            components for building websites.
          </p>
        </div>
      </div>
    </div>
  );
}
