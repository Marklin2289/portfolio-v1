import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>I'm Mark Lin</Title>
          <p>Front End Developer</p>
        </Left>
        <Right></Right>
      </Content>
    </Section>
  );
};

export default Hero;

const Section = styled.div`
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;
const Content = styled.div``;
const Left = styled.div``;
const Title = styled.h1``;
const Right = styled.div``;
