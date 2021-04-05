import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Js from "../assets/js.svg";
import HTML from "../assets/html.svg";
import CSS from "../assets/CSS.svg";
import ReactJs from "../assets/React.svg";
import Sc from "../assets/Sc.png";

const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 50 },
  };
  return (
    <Section>
      <Container>
        <Left>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ easeOut: "easeOut", duration: 1.5 }}
          >
            I'm Mark Lin
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
          >
            Front End Developer
          </motion.p>
        </Left>
        <Right>
          <Image
            src={Js}
            alt="planet"
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 100, right: 250, top: 0, bottom: 150 }}
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          />
          <Image
            src={HTML}
            alt="planet"
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
          />
          <Image
            src={CSS}
            alt="planet"
            color={"white"}
            whileTap={{ scale: 0.7 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
          />
          <Image
            src={ReactJs}
            alt="planet"
            whileTap={{ scale: 0.5 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          />
          <Image
            src={Sc}
            alt="planet"
            whileTap={{ scale: 0.5 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: smokewhite;
  /* background-repeat: no-repeat; */
  /* background-size: contain; */
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Left = styled.div`
  display: flex;
  color: #131313;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 4rem;
  }

  p {
    margin: 2rem 0;
    font-size: 2rem;
    line-height: 1.1;
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  background: transparent;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 250px;
    left: 10px;
    border: 2px solid black;
  }
  ${Image}:nth-child(2) {
    top: 250px;
    right: 80px;
  }
  ${Image}:nth-child(3) {
    top: 390px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 340px;
    right: 75px;
    max-width: 200px;
    max-height: 200px;
  }
  ${Image}:nth-child(5) {
    bottom: 250px;
    right: 330px;
    border: 2px solid black;
  }
`;
