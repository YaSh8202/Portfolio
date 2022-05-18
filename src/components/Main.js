import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT  = styled(NavLink)`
color: ${props=>props.theme.text};
text-decoration: none;
z-index: 1;
`;
const SKILLS  = styled(ABOUT)``;


const Main = () => { 
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />

        <Contact target="_blank" href="mailto::bajajy82@gmail.com">
          <h2>Say hi...</h2>
        </Contact>
        <BLOG to="/blog">
          <h2>Blog</h2>
        </BLOG>
        <WORK to="/work">
          <h2>Work</h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about">
            <h2>About</h2>
          </ABOUT>
          <SKILLS to="/skills">
            <h2>My Skills</h2>
          </SKILLS>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;