import About from "@/components/About";
import Project from "@/components/Project";
import Home from "@/components/home";
import Test from "@/components/test";
import React from "react";
import Item from "@/components/ui/scroll";
import Skills from "@/components/Skills";

function apps() {
  return (
    <div>
      <Item />
      <Home />
      <About />
      <Project />
      <Skills />
      <Test />
    </div>
  );
}

export default apps;
