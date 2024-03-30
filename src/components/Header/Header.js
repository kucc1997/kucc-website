import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import styled from 'styled-components'
import './header-style.css'
// import searchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='flex relative w-full p-10 justify-around items-center'>
      <div>
        <Link to="/" className='cursor-pointer'><img src={'kucc-logo.png'} className="w-20 h-20 object-cover" alt='logo'/></Link>
      </div>
      <div className='flex text-xl space-x-6 list-none'>
        <li className="text-teal-600 font-semibold transition cursor-pointer">
          <Link to="/">HOME</Link>
        </li>
        <li className="text-teal-600 font-semibold transition-all cursor-pointer relative group">
          OUR TEAM
          <ul className="hidden mt-1 space-y-2 absolute z-10 p-[20px] list-none bg-[rgb(44,43,43)] text-[#fff] group-hover:block">
            <li className="cursor-pointer">
              <Link to="executive-committee">EXECUTIVE COMMITTEE</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="advisory-board">ADVISORY BOARD</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="community-coordinators">COMMUNITY COORDINATORS</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="documentation-teams">DOCUMENTATION TEAM</Link>
            </li>
          </ul>
        </li>
        <li className="text-teal-600 font-semibold transition cursor-pointer relative group">
          PUBLICATIONS
          <ul className="hidden space-y-2 absolute z-10 p-[20px] list-none bg-[rgb(44,43,43)] text-[#fff] group-hover:block">
            <li className="list-item">
              <Link to="it-express">IT EXPRESS</Link>
            </li>
            <li className="list-item">
              <Link to="blogs">STUDENT BLOGS</Link>
            </li>
          </ul>
        </li>
        <li className="text-teal-600 font-semibold">
          <Link to="news-and-notices">NEWS AND NOTICES</Link>
        </li>
        <li className="text-teal-600 font-semibold">
          <Link to="events">EVENTS</Link>
        </li>
        <li className="text-teal-600 font-semibold">
          <Link to="code-of-conduct">CODE OF CONDUCT</Link>
        </li>
        <li className="text-teal-600 font-semibold">
          <Link to="contact">CONTACT</Link>
        </li>
        <li className="text-teal-600 font-semibold">
          <Link to="register">APPLY TO BE A MEMBER</Link>
        </li>
      </div>
    </div>
  )
}

export default NavBar
