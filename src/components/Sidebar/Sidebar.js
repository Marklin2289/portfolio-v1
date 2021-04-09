import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarElement";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="home">
            HOME
          </SidebarLink>
          <SidebarLink onClick={toggle} to="about">
            ABOUT
          </SidebarLink>
          <SidebarLink onClick={toggle} to="projects">
            PROJECTS
          </SidebarLink>
          <SidebarLink onClick={toggle} to="contact">
            CONTACT
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap></SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
