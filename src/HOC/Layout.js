import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
const Layout = () => {
  return (
    <>
      <Header />
      {/* Test Component is for test reasons */}
      <Outlet />
      {/* For subscribe pannel in footer need to add top={true} */}
      <Footer top={true} />
    </>
  )
}

export default Layout
