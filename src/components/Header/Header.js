import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import styled from 'styled-components'
import './header-style.css'
// import searchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 115px;
  position: relative;
  font-family: 'Poppins', sans-serif;
`

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: inherit;
  margin: auto;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  height: 100%;
`

const Logo = styled.img`
  height: inherit;
  width: auto;
`

const UList = styled.ul`
  width: 85%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo src={'kucc-logo.png'} />
        </LogoContainer>
        <UList>
          <li className="list-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="list-item">
            OUR TEAM
            <ul className="hidden-list">
              <li className="list-item">
                <Link to="executive-committee">EXECUTIVE COMMITTEE</Link>
              </li>
              <li className="list-item">
                <Link to="advisory-board">ADVISORY BOARD</Link>
              </li>
              <li className="list-item">
                <Link to="community-coordinators">COMMUNITY COORDINATORS</Link>
              </li>
              <li className="list-item">
                <Link to="documentation-teams">DOCUMENTATION TEAM</Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            PUBLICATIONS
            <ul className="hidden-list">
              <li className="list-item">
                <Link to="it-express">IT EXPRESS</Link>
              </li>
              <li className="list-item">
                <Link to="blogs">STUDENT BLOGS</Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <Link to="news-and-notices">NEWS AND NOTICES</Link>
          </li>
          <li className="list-item">
            <Link to="events">EVENTS</Link>
          </li>
          <li className="list-item">
            <Link to="code-of-conduct">CODE OF CONDUCT</Link>
          </li>
          <li className="list-item">
            <Link to="contact">CONTACT</Link>
          </li>
          <li className="list-item">
            <Link to="register">APPLY TO BE A MEMBER</Link>
          </li>
        </UList>
      </Wrapper>
    </Container>
  )
}

export default NavBar
