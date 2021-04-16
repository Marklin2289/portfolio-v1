import svg1 from "../../assets/svg-1.svg";
import svg2 from "../../assets/svg-2.svg";
import svg3 from "../../assets/svg-3.svg";

export const homeObjOne = {
  id: "about",
  toId: "projects",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About Me :",
  headline: "I love coding and learning.",
  description:
    "I'm looking for an opportunity as a Front End Developer in order to grow my skills and career. I love hiking, workout and eating.",
  buttonLabel: "Check out my projects",
  imgStart: false,
  img: svg1,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjTwo = {
  id: "projects",
  toId: "contact",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "My Projects :",
  headline: "google.com",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Contact Me",
  imgStart: true,
  img: svg2,
  alt: "Piggybank",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "contact",
  toId: "home",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  buttonLabel: "Back to Home",
  imgStart: true,
  img: svg3,
  alt: "EmailBox",
  dark: false,
  primary: false,
  darkText: true,
  topLine: "Contact Me",
  headline: "Feel free to reach out to me",
  description: "Email : MarkLin2289@gmail.com",
};
