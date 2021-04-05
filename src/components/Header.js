import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Container>
      <Nav>
        <NavLink to="/">
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            whileHover={{ scale: 0.95, border: "none" }}
          >
            HOME
          </Button>
        </NavLink>
        <NavLink to="/about">
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            whileHover={{ scale: 0.95, border: "none" }}
          >
            ABOUT
          </Button>
        </NavLink>
        <NavLink to="/projects">
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
            whileHover={{ scale: 0.95, border: "none" }}
          >
            PROJECTS
          </Button>
        </NavLink>
        <NavLink to="/contact">
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 4 } }}
            whileHover={{ scale: 0.95, border: "none" }}
          >
            CONTACT
          </Button>
        </NavLink>
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
  /* font-weight: 700; */
  /* line-height: 60px; */
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #131313;
  color: #131313;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background: transparent;
  margin-top: 15px;
`;
