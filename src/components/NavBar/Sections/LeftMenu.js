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
  //TODO 전체에 margin, padding 0px 적용할 경우 수정해야 되는지 확인하기
  margin: 0px;
  padding: 0px;
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
