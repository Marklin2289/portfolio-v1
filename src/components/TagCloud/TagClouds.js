import React from "react";
import TagCloud from "react3dtagcloud";
import styled from "styled-components";
const TagClouds = () => {
  const tagName = [
    "Python",
    "Javscript",
    "HTML",
    "CSS",
    "styled-components",
    "ReactJS",
    "ExpressJS",
    "redux",
    "MongoDB",
    "Java",
    "Git",
    "TeamPlayer",
    "Love Learning",
    "Love Coding",
    "Workout",
    "Front End Dev",
  ];
  return (
    <Container>
      <TagCloud tagName={tagName} speed={1} radius={150}></TagCloud>
    </Container>
  );
};

export default TagClouds;

const Container = styled.div`
  width: 300px;
  height: 300px;
  pointer-events: none;
`;
