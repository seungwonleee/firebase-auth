import React, { useState } from "react";
import { authService } from "../../fire_module/fireMain";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  let history = useHistory();
  const isloggedIn = useSelector((state) => state.auth.isloggedIn);

  // 로그인한 유저는 해당 페이지에 접근하지 못하도록 Redirect
  if (isloggedIn) {
    history.push("/");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (event) => {
    switch (event.currentTarget.name) {
      case "email":
        setEmail(event.currentTarget.value);
        break;
      case "password":
        setPassword(event.currentTarget.value);
        break;
      default:
        break;
      // TODO default 설정 어떻게 할지 고려하기
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    await authService
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // 로그인 성공
        if (user.operationType === "signIn") {
          alert("로그인 성공! 환영합니다.");
        }
        // 홈으로 이동
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <h2>로그인 페이지</h2>
      <form onSubmit={handleLogin}>
        이메일:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInput}
          required
        />
        비밀번호:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
          required
        />
        <button>로그인</button>
      </form>
    </>
  );
};

export default LoginPage;
