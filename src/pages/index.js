import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import {
  homeObjOne,
  // homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Project from "../components/Project/Project";
import { projectData } from "../components/Project/Data";
import TagClouds from "../components/TagCloud/TagClouds";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjTwo} /> */}
      <Project {...projectData} />
      <InfoSection {...homeObjThree} />
      {/* <TagClouds /> */}
    </>
  );
};

export default Home;
