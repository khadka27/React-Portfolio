import About from "@/components/About";
import Project from "@/components/Project";
import Home from "@/components/home";
import Test from "@/components/test";
import React from "react";
import Item from "@/components/ui/scroll";
import Skills from "@/components/Skills";
import { InfiniteMovingCardsDemo } from "@/components/moving-card";
import ContactForm from "@/components/contact";

function apps() {
  return (
    <div>
      <Item />
      <Home />
      <About />
      <Project />
      <Skills />
      <Test />
      <InfiniteMovingCardsDemo />
      <ContactForm />
    </div>
  );
}

export default apps;
