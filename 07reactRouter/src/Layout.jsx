import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <Header/>
      <Outlet/> 
      {/* this allow to call other pages dynamically.
      ab jo bhi pagse honge us mein ye header and footer hamesha dikhenge.
      */}
      <Footer/>
    </>
  )
}

export default Layout
