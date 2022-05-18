import React from "react";
import styled from "styled-components";
import { CodeChef, Facebook, Github, LinkedIn } from "../components/AllSvgs";
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

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

function SocialIcons(props) {
  return (
    <Icons>
      <div>
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
      </div>
      <div>
        <a
          rel="noreferrer"
          style={{ color: "inherit" }}
          href="https://github.com/yash8202"
          target="_blank"
        >
          <CodeChef
            width={30}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div>
        <a
          rel="noreferrer"
          style={{ color: "inherit" }}
          href="https://github.com/yash8202"
          target="_blank"
        >
          <Facebook
            width={30}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div>
        <a
          rel="noreferrer"
          style={{ color: "inherit" }}
          href="https://github.com/yash8202"
          target="_blank"
        >
          <LinkedIn
            width={30}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <Line color={props.theme} />
    </Icons>
  );
}

export default SocialIcons;
