import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
// 모든 페이지 imports
import NavBar from "../components/NavBar/NavBar";
import LandingPage from "../components/LandingPage/LandingPage";
import AboutPage from "../components/AboutPage/AboutPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import LoginPage from "../components/LoginPage/LoginPage";
import MyPage from "../components/MyPage/MyPage";
import Footer from "../components/Footer/Footer";
import FindAccountPage from "../components/FindAccountPage/FindAccountPage";
// styled-components
const MainSection = styled.section`
  background: #f7f7f7;
  padding-top: 55px;
`;

const Routes = () => {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <MainSection>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/findaccount" component={FindAccountPage} />
        </Switch>
      </MainSection>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default Routes;
