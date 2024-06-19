"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Link from "next/link";
const people = [
  {
    id: 1,
    name: "Facebook",
    designation: "khadka27",
    image:
      "data:image/png;base64,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",
    link: "https://www.facebook.com/your-profile", // Add Facebook link
  },
  {
    id: 2,
    name: "Instagram",
    designation: "khadka_27",
    image:
      "data:image/jpeg;base64,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",
    link: "https://www.instagram.com/your-profile", // Add Instagram link
  },
  {
    id: 3,
    name: "Twitter",
    designation: "Data Scientist",
    image:
      "data:image/png;base64,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",
    link: "https://www.twitter.com/your-profile", // Add Twitter link
  },
  {
    id: 4,
    name: "LinkedIn",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    link: "https://www.linkedin.com/your-profile", // Add LinkedIn link
  },
  {
    id: 5,
    name: "Snapchat",
    designation: "abixhek2020",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    link: "https://www.snapchat.com/your-profile", // Add Snapchat link
  },
  {
    id: 6,
    name: "GitHub",
    designation: "khadka27",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    link: "https://www.github.com/your-profile", // Add GitHub link
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}