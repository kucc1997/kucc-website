import { hover } from "@testing-library/user-event/dist/hover";
import React, { Component, useState } from "react";
import styled from "styled-components";
import "./header-style.css";
// import searchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  width: 100%;
  height: 115px;
  position: relative;
  font-family: "Poppins", sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: inherit;
  margin: auto;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  height: 100%;
`;

const Logo = styled.img`
  height: inherit;
  width: auto;
`;

const UList = styled.ul`
  width: 85%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo src={"./kucc-logo.png"} />
        </LogoContainer>
        <UList>
          <li class="list-item">
            <a href="/">HOME</a>
          </li>
          <li class="list-item">
            OUR TEAM
            <ul class="hidden-list">
              <li class="list-item">
                <a href="/executive-committee-2020-21/">EXECUTIVE COMMITTEE</a>
              </li>
              <li class="list-item">
                <a href="/advisory-board/">ADVISORY BOARD</a>
              </li>
              <li class="list-item">
                <a href="/community-coordinators/">COMMUNITY COORDINATORS</a>
              </li>
              <li class="list-item">
                <a href="/elementor-478/">DOCUMENTATION TEAM</a>
              </li>
            </ul>
          </li>
          <li class="list-item">
            PUBLICATIONS
            <ul class="hidden-list">
              <li class="list-item">
                <a href="/it-express">IT EXPRESS</a>
              </li>
              <li class="list-item">
                <a href="/blogs">STUDENT BLOGS</a>
              </li>
            </ul>
          </li>
          <li class="list-item">
            <a href="/news-and-notices">NEWS AND NOTICES</a>
          </li>
          <li class="list-item">
            <a href="/events">EVENTS</a>
          </li>
          <li class="list-item">
            <a href="/code-of-conduct">CODE OF CONDUCT</a>
          </li>
          <li class="list-item">
            <a href="/contact">CONTACT</a>
          </li>
          <li class="list-item">
            <a href="/register">APPLY TO BE A MEMBER</a>
          </li>
        </UList>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
