import React from "react";
import styled from "styled-components";
import { CodeChef, Facebook, Github, LinkedIn } from "../components/AllSvgs";

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
  background-color: ${(props) => props.theme.text};
`;

function SocialIcons() {
  return (
    <Icons>
      <div>
        <a
          rel="noreferrer"
          style={{ color: "inherit" }}
          href="https://github.com/yash8202"
          target="_blank"
        >
          <Github width={30} height={25} fill="currentColor" />
        </a>
      </div>
      <div>
      <a
          rel="noreferrer"
          style={{ color: "inherit" }}
          href="https://github.com/yash8202"
          target="_blank"
        >
          <CodeChef width={30} height={25} fill="currentColor" />
        </a>
      </div>
      <div>
      <a
          rel="noreferrer"
          style={{ color: "inherit" }}
          href="https://github.com/yash8202"
          target="_blank"
        >
          <Facebook width={30} height={25} fill="currentColor" />
        </a>
      </div>
      <div>
      <a
          rel="noreferrer"
          style={{ color: "inherit" }}
          href="https://github.com/yash8202"
          target="_blank"
        >
          <LinkedIn width={30} height={25} fill="currentColor" />
        </a>
      </div>
      <Line />
    </Icons>
  );
}

export default SocialIcons;
