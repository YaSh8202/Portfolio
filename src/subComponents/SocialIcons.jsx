import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { CodeChef, Codeforces, Github, LinkedIn } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

function SocialIcons(props) {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          rel="noreferrer"
          style={{ color: "inherit" }}
          href="https://github.com/yash8202"
          target="_blank"
        >
          <Github
            width={30}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
      initial={{ transform: "scale(0)" }}
      animate={{ scale: [0, 1, 1.5, 1] }}
      transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          rel="noreferrer"
          style={{ color: "inherit" }}
          href="https://www.linkedin.com/in/yash-bajaj-b6a525235/"
          target="_blank"
        >
          <LinkedIn
            width={30}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      
      
      <motion.div
      initial={{ transform: "scale(0)" }}
      animate={{ scale: [0, 1, 1.5, 1] }}
      transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          rel="noreferrer"
          style={{ color: "inherit" }}
          href="https://codeforces.com/profile/codefYash"
          target="_blank"
        >
          <Codeforces
            width={30}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      {/* CodeChef */}
      <motion.div
      initial={{ transform: "scale(0)" }}
      animate={{ scale: [0, 1, 1.5, 1] }}
      transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          rel="noreferrer"
          style={{ color: "inherit" }}
          href="https://www.codechef.com/users/yashb1010"
          target="_blank"
        >
          <CodeChef
            width={30}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <Line
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ duration: 1, delay: 0.8 }}
        color={props.theme}
      />
      
    </Icons>
  );
}

export default SocialIcons;
