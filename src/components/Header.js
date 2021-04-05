import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 20;
`;
const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavLink = styled(Link)`
  padding: 0 15px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 60px;
`;
