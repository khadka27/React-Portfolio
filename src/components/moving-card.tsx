"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={quotes} direction="right" speed="slow" />
    </div>
  );
}

const quotes = [
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    name: "Martin Fowler",
    title: "Software Engineer",
  },
  {
    quote:
      "Walking on water and developing software from a specification are easy if both are frozen.",
    name: "Edward V. Berard",
    title: "Computer Scientist",
  },
  {
    quote:
      "There are two ways to write error-free programs; only the third one works.",
    name: "Alan J. Perlis",
    title: "Computer Scientist",
  },
  {
    quote:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    name: "Rick Cook",
    title: "Author",
  },
  {
    quote:
      "Debugging is like being the detective in a crime movie where you are also the murderer.",
    name: "Filipe Fortes",
    title: "Software Engineer",
  },
];

export default InfiniteMovingCardsDemo;
