import React, { useState } from "react";
import { authService } from "../../fire_module/fireMain";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
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

  //회원가입하기 ( 회원가입 성공하면 바로 로그인된다. )
  const handleCreateAccount = async (event) => {
    event.preventDefault();

    await authService
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // 회원가입 및 로그인 성공
        if (user.operationType === "signIn") {
          alert("회원가입을 축하합니다. 환영합니다.");
        }
        // LandingPage로 이동
        history.push("/");
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        if (errorCode === "auth/email-already-in-use") {
          alert("이미 회원가입된 이메일 입니다.");
        }
      });
  };

  return (
    <>
      <h2>회원가입 페이지</h2>
      <form onSubmit={handleCreateAccount}>
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
        <button>회원가입</button>
      </form>
    </>
  );
};

export default RegisterPage;
