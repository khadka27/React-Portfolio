import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import html from "./Images/html.png";
import css from "./Images/css.png";
import javascript from "./Images/javascript.png";
import react from "./Images/react.png";
import bootstrap from "./Images/bootstrap.png";
import tailwind from "./Images/tailwind.png";
// import nodejs from "./Images/nodejs.png";
// import python from "./Images/python.png";
// import java from "./Images/java.png";
// import django from "./Images/django.png";

const SkillBox = ({
  image,
  title,
  description,
  link,
}: {
  image: string | StaticImageData;
  title: string;
  description: string;
  link: string;
}) => {
  const imageUrl = typeof image === "string" ? image : image.src;
  return (
    <div className="skill-box bg-gray-800 border-2 border-gray-700 rounded-lg p-4 transition-transform transform hover:scale-105 hover:border-teal-400">
      <div className="flex items-center space-x-4">
        <Image
          src={image}
          alt={title}
          width={48}
          height={48}
          className="w-12 h-12"
        />
        <div>
          <h3 className="font-semibold text-lg">
            {title}{" "}
            <Link href={link} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                🔗
              </a>
            </Link>
          </h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const frontendSkills = [
    {
      image: html,
      title: "HTML",
      description: "Markup language for creating web pages.",
      link: "#",
    },
    {
      image: css,
      title: "CSS",
      description: "Style sheet language for designing web pages.",
      link: "#",
    },
    {
      image: javascript,
      title: "JavaScript",
      description: "Programming language for web development.",
      link: "#",
    },
    {
      image: react,
      title: "React",
      description: "JavaScript library for building user interfaces.",
      link: "#",
    },
    {
      image: tailwind,
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
      link: "#",
    },
    {
      image: bootstrap,
      title: "Bootstrap",
      description: "Popular CSS framework for developing responsive websites.",
      link: "#",
    },
  ];

  const backendSkills = [
    {
      image: html,
      title: "Node.js",
      description: "JavaScript runtime for server-side development.",
      link: "#",
    },
    {
      image: html,
      title: "Python",
      description:
        "High-level programming language for general-purpose programming.",
      link: "#",
    },
    {
      image: html,
      title: "Java",
      description: "Object-oriented programming language.",
      link: "#",
    },
    {
      image: html,
      title: "Django",
      description: "High-level Python web framework.",
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-900 text-white font-sans p-6">
      <section className="body-font bg-gray-200 dark:bg-gray-900" id="skills">
        <div className="relative flex items-center justify-center mb-10">
          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-bold mb-4">Skills</h2>
          </div>
          <h1 className="shadow-text">SKILL</h1>
        </div>

        <div className="section mb-10">
          <h2 className="text-center text-2xl font-bold mb-6">
            Frontend Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frontendSkills.map((skill, index) => (
              <SkillBox
                key={index}
                image={skill.image}
                title={skill.title}
                description={skill.description}
                link={skill.link}
              />
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="text-center text-2xl font-bold mb-6">
            Backend Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {backendSkills.map((skill, index) => (
              <SkillBox
                key={index}
                image={skill.image}
                title={skill.title}
                description={skill.description}
                link={skill.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
