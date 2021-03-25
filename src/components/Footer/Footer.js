import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// material UI Imports
import BatteryCharging20Icon from "@material-ui/icons/BatteryCharging20";
import Typography from "@material-ui/core/Typography";

// styled components
const FooterSection = styled.footer`
  height: 20vh;
  background: #2b2d2e;
  color: #d5d5d5;
  a {
    color: #d5d5d5;
  }
  @media only screen and (max-width: 768px) {
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LogoSection = styled.h2`
  display: flex;
  align-items: center;
  padding: 2rem 5rem 0.5rem;
  p {
    font-size: ${(props) => props.theme.fontSizes.titleSize};
  }
`;

const EmailSection = styled.p`
  padding: 1rem 5rem 0;
  font-size: ${(props) => props.theme.fontSizes.large};
  a {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.large};
    text-align: center;
  }
`;

const CopyrightSection = styled.div`
  padding: 0.5rem 5rem 0;
  span {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

// Copyright Component
const Copyright = () => {
  return (
    <Typography align="left">
      <span>Copyright ©</span>
      <Link to="/about">
        <span>SeungWon</span>
      </Link>{" "}
      <span>{new Date().getFullYear()}</span>
    </Typography>
  );
};

const Footer = () => {
  const breakPoint = useMediaQuery({
    query: "(min-width:380px)",
  });
  return (
    <FooterSection>
      <LogoSection>
        <BatteryCharging20Icon style={{ color: "green", fontSize: "3.6rem" }} />
        <p>Check Charging</p>
      </LogoSection>
      {breakPoint ? (
        <EmailSection>
          <a href="mailto:seungwon.code@gmail.com">
            Email: seungwon.code@gmail.com
          </a>
        </EmailSection>
      ) : (
        <>
          <EmailSection>
            <p>Contact</p>
            <a href="mailto:seungwon.code@gmail.com">seungwon.code@gmail.com</a>
          </EmailSection>
        </>
      )}
      <CopyrightSection>
        <Copyright />
      </CopyrightSection>
    </FooterSection>
  );
};

export default Footer;
