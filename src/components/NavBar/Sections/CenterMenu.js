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
  padding-right: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const CenterMenu = () => {
  return (
    <List className="Menu-Font">
      <Item>
        <StyledLink to="/">Home</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/about">About</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/">menu1</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/">menu2</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/">menu3</StyledLink>
      </Item>
    </List>
  );
};

export default CenterMenu;
