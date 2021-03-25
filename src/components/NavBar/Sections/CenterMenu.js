import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./MenuFont.css";

// styled-components
const List = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  padding: ${(props) => props.theme.paddings.xlarge};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`;

const CenterMenu = () => {
  return (
    <List className="Menu-Font">
      <StyledLink to="/">
        <Item>Home</Item>
      </StyledLink>
      <StyledLink to="/about">
        <Item>About</Item>
      </StyledLink>
      <StyledLink to="/">
        <Item>menu1</Item>
      </StyledLink>
      <StyledLink to="/">
        <Item>menu2</Item>
      </StyledLink>
      <StyledLink to="/">
        <Item>menu3</Item>
      </StyledLink>
    </List>
  );
};

export default CenterMenu;
