import React from "react";
import { authService } from "../../../fire_module/fireMain";
import { useSelector, useDispatch } from "react-redux";
import { loginState, setUid } from "../../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "./MenuFont.css";

// styled-components
const List = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  padding: ${(props) => props.theme.paddings.xlarge};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`;

const RightMenu = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  let history = useHistory();

  // 로그아웃하기
  const handleLogout = () => {
    authService.signOut();
    history.push("/");
    // 로그아웃시 Redux의 사용자 로그인 상태와 식별 uid 초기화
    dispatch(loginState());
    dispatch(setUid(null));
  };

  return (
    <>
      {isLoggedIn ? (
        // 로그인했을 때 메뉴
        <List className="Menu-Font">
          <StyledLink to="/mypage">
            <Item>내 정보</Item>
          </StyledLink>
          <StyledLink to="/" onClick={handleLogout}>
            <Item>로그아웃</Item>
          </StyledLink>
        </List>
      ) : (
        // 로그아웃일 때 메뉴
        <List className="Menu-Font">
          <StyledLink to="/register">
            <Item>회원가입</Item>
          </StyledLink>
          <StyledLink to="/login">
            <Item>로그인</Item>
          </StyledLink>
        </List>
      )}
    </>
  );
};

export default RightMenu;
