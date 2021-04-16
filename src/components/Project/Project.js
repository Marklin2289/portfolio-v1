import React from "react";
import {
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectH2,
  ProjectP,
  BtnWrap,
} from "./ProjectElement";
import Icon1 from "../../assets/PorjectIcon/svg-1.svg";
import Icon2 from "../../assets/PorjectIcon/svg-3.svg";
import Icon3 from "../../assets/PorjectIcon/svg-5.svg";
import { Button } from "../ButtonElement";
const Project = ({ toId, primary, dark, buttonLabel }) => {
  return (
    <ProjectContainer id="projects">
      <ProjectH1>My Projects :</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={Icon1} />
          <ProjectH2>Reduce Expenses</ProjectH2>
          <ProjectP>
            we help reduce your fees and increase your overall revenue
          </ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon2} />
          <ProjectH2>Virtual Offices</ProjectH2>
          <ProjectP>
            we help reduce your fees and increase your overall revenue
          </ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon3} />
          <ProjectH2>Premium Benefits</ProjectH2>
          <ProjectP>
            we help reduce your fees and increase your overall revenue
          </ProjectP>
        </ProjectCard>
      </ProjectWrapper>
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
    </ProjectContainer>
  );
};

export default Project;
