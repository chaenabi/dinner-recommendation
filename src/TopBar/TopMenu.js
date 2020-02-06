import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const TopMenu = () => {
  const menu = {
    Home: "Home",
    Sign: false,
    SeeMyPage: "마이페이지",
    AfterService: "고객의 소리"
  };

  const TopMenuBlockStyle = styled.div`
    display: flex;
    padding: 0.8rem;
    width: 1024px;
    margin: 0 auto;
    @media screen and (max-width: 1024px) {
      width: 100%;
      overflow-x: auto;
    }
  `;

  const TopMenuStyle = styled.div`
    padding-right: 1rem;
    font-size: 0.825rem;
    cursor: pointer;

    &:hover {
      color: blue;
      font-weight: 700;
    }
  `;

  const SearchMenuBlockStyle = styled.span`
    padding-left: 16em;
    @media screen and (min-width: 600px) {
      display: hidden;
    }
  `;

  return (
    <div>
      <TopMenuBlockStyle>
        <TopMenuStyle>{menu.Home}</TopMenuStyle>
        <TopMenuStyle>{menu.Sign ? "로그아웃 " : "로그인"}</TopMenuStyle>
        <TopMenuStyle>{menu.SeeMyPage}</TopMenuStyle>
        <TopMenuStyle> {menu.AfterService}</TopMenuStyle>

        <SearchMenuBlockStyle>
          <input
            type="text"
            style={{
              width: "200px",
              height: "22px",
              fontSize: "22px",
              borderColor: "lightblue"
            }}
          />
          <FaSearch />
          인기검색어
        </SearchMenuBlockStyle>
      </TopMenuBlockStyle>
    </div>
  );
};

export default TopMenu;
