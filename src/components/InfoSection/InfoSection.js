import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElement";
import { Button } from "../ButtonElement";
import TagClouds from "../TagCloud/TagClouds";

const InfoSection = ({
  id,
  toId,
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText,
}) => {
  return (
    <>
      {/* id={id} */}
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={toId}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-10}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    // dark2 = {dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              {/* <TagClouds /> */}
              <ImgWrap>
                {/* <Img src={img} alt={alt} /> */}
                <TagClouds />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
