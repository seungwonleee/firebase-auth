import React, { useEffect } from "react";
import Routes from "./Routes/Routes";
import { authService } from "./fire_module/fireMain";
import { useSelector, useDispatch } from "react-redux";
import { toggleLoginState } from "./features/auth/authSlice";

const App = () => {
  const state = useSelector((state) => state.auth.isloggedIn);
  const dispatch = useDispatch();
  console.log(state);

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
      <Routes />
    </div>
  );
};

export default App;
