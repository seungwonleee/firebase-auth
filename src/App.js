import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./Routes/Routes";
import { authService } from "./fire_module/fireMain";
import { useSelector, useDispatch } from "react-redux";
import { toggleLoginState } from "./features/auth/authSlice";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./Theme/theme";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// styled-components
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding:0;
    margin:0;
    font-size:10px;
  }
  a {
    text-decoration:none;
    color: #3F51B5;
  }
`;

const MainSection = styled.section`
  background: #f7f7f7;
  padding-top: 55px;
`;

const App = () => {
  const state = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  console.log("로그인 상태 => ", state);

  // 로그인 Auth 변경 감지
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      {
        user && dispatch(toggleLoginState());
      }
    });
  }, []);

  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <MainSection>
            <ScrollToTop />
            <Routes />
          </MainSection>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
