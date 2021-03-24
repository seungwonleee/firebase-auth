import React, { useEffect } from "react";
import Routes from "./Routes/Routes";
import { authService } from "./fire_module/fireMain";
import { useSelector, useDispatch } from "react-redux";
import { toggleLoginState } from "./features/auth/authSlice";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding:0;
    margin:0;
  }
  a {
    text-decoration:none;
    color: #3F51B5;
  }

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
      <Routes />
    </div>
  );
};

export default App;
