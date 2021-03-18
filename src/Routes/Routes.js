import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "../components/Home";
import About from "../components/About";
import Register from "../components/Register";
import Login from "../components/Login";
import MyPage from "../components/MyPage";
import Footer from "../components/Footer";

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage" component={MyPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
