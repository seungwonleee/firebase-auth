import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// 라우팅할 모든 페이지 imports
import LandingPage from "../components/LandingPage/LandingPage";
import AboutPage from "../components/AboutPage/AboutPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import LoginPage from "../components/LoginPage/LoginPage";
import MyPage from "../components/MyPage/MyPage";
import FindAccountPage from "../components/FindAccountPage/FindAccountPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/mypage" component={MyPage} />
      <Route exact path="/findaccount" component={FindAccountPage} />
    </Switch>
  );
};

export default Routes;
