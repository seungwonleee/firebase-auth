import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import LandingPage from "../components/LandingPage/LandingPage";
import AboutPage from "../components/AboutPage/AboutPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import LoginPage from "../components/LoginPage/LoginPage";
import MyPage from "../components/MyPage/MyPage";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

// styled-components
const HeaderSection = styled.header`
  background: #ffffff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dedede;
  position: fixed;
  width: 100%;
`;

const MainSection = styled.section`
  background: #f7f7f7;
  padding-top: 55px;
`;

const FooterSection = styled.footer`
  background: orange;
`;

const Routes = () => {
  return (
    <Router>
      <HeaderSection>
        <NavBar />
      </HeaderSection>
      <MainSection>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/mypage" component={MyPage} />
        </Switch>
      </MainSection>
      <FooterSection>
        <Footer />
      </FooterSection>
    </Router>
  );
};

export default Routes;
