import React, { useState } from "react";
import { Button } from "../ButtonElement";
import Js from "../../assets/js.svg";
import CSS from "../../assets/CSS.svg";
import HTML from "../../assets/html.svg";
import Reactjs from "../../assets/React.svg";
import git from "../../assets/git.svg";
import expressjs from "../../assets/expressjs.svg";
import Python from "../../assets/Python.png";
import Sc from "../../assets/Sc.png";
import mongoDB from "../../assets/mongoDB.png";
import nodejs from "../../assets/nodejs.png";

import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ImageContent,
  Image,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hello, I'm Mark Lin</HeroH1>
        <HeroP>Front End Developer</HeroP>
        <ImageContent>
          <Image src={HTML} />
          <Image src={CSS} />
          <Image src={Js} />
          <Image src={Reactjs} />
          <Image src={Sc} />
          <Image src={Python} />
          <Image src={git} />
          <Image src={expressjs} />
          <Image src={mongoDB} />
          <Image src={nodejs} />
        </ImageContent>
        <HeroBtnWrapper>
          <Button
            to="signup"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
