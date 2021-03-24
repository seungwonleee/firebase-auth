import React from "react";
import { Link } from "react-router-dom";
import BatteryCharging20Icon from "@material-ui/icons/BatteryCharging20";
import styled from "styled-components";
import "./MenuFont.css";

// styled-components
const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  padding-left: 1rem;
`;

const Item = styled.li`
  padding-right: 0.3rem;
  font-size: 17px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const LeftMenu = () => {
  return (
    <StyledLink to="/">
      <List>
        <Item>
          <BatteryCharging20Icon
            className="Logo-Icon"
            style={{ fontSize: "3rem" }}
          />
        </Item>
        <Item>
          <h2 className="Logo-Font">Check Charing</h2>
        </Item>
      </List>
    </StyledLink>
  );
};

export default LeftMenu;
