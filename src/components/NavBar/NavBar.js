import React from "react";
import styled from "styled-components";
import LeftMenu from "./Sections/LeftMenu";
import CenterMenu from "./Sections/CenterMenu";
import RightMenu from "./Sections/RightMenu";

// styled-components
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const NavBar = () => {
  return (
    <Navbar>
      <LeftMenu />
      <CenterMenu />
      <RightMenu />
    </Navbar>
  );
};

export default NavBar;
