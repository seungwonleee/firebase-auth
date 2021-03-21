import React from "react";
import { authService } from "../../../fire_module/fireMain";
import { useSelector } from "react-redux";
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
  padding-right: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const RightMenu = () => {
  const isloggedIn = useSelector((state) => state.auth.isloggedIn);
  let history = useHistory();

  // 로그아웃하기
  const handleLogout = () => {
    authService.signOut();
    history.push("/");
    // TODO 새로고침을 하지않으면 메뉴가 안바뀜 / indexdDB 저장내용은 삭제됨 / reload 만이 정답인지 찾아보기
    window.location.reload(true);
  };
  return (
    <>
      {isloggedIn ? (
        // 로그인했을 때 메뉴
        <List className="Menu-Font">
          <Item>
            <StyledLink to="/mypage">내 정보</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/" onClick={handleLogout}>
              로그아웃
            </StyledLink>
          </Item>
        </List>
      ) : (
        // 로그아웃일 때 메뉴
        <List className="Menu-Font">
          <Item>
            <StyledLink to="/register">회원가입</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/login">로그인</StyledLink>
          </Item>
        </List>
      )}
    </>
  );
};

export default RightMenu;
