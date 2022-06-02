import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import {Develope, Solution } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton theme="light" />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Solution width={40} height={40} /> Problem Solver
          </Title>
          <Description>
            I'm passionate about competitive programming as it helps to increase
            our problem solving skills and helps us bring codes into real worls
            practice. 
          </Description>
          {/* <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
            </ul>
          </Description> */}
          <Description>
            <strong>SKILLS</strong>
            <ul>
              <li>C++</li>
              <li>Python</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              HTML, CSS, JavaScript, React, Redux, SASS, NextJs, TypeScript,
              FireBase
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VSCode, Github, Codepen, etc.</p>
          </Description>
        </Main>
        <BigTitle right="30%" top="80%" text="Skills" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
