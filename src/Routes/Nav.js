import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authService } from "../fire_module/fireMain";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const isloggedIn = useSelector((state) => state.auth.isloggedIn);
  let history = useHistory();

  const handleLogout = () => {
    // 로그아웃
    authService.signOut();
    history.push("/");
    // TODO 새로고침을 하지않으면 메뉴가 안바뀜 indexdDB 저장내용은 삭제됨
    window.location.reload(true);
  };

  return (
    <>
      {isloggedIn ? (
        // 로그인했을 때 메뉴
        <nav>
          <div>로그인(O) 메뉴</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/myPage">내 정보</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>
                로그아웃
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        // 로그아웃일 때 메뉴
        <nav>
          <div>로그인(X) 메뉴</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/register">회원가입</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
