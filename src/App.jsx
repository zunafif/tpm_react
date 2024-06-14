import { useState } from 'react'
import './App.css'
import './components/customJs.js'
import './components/bootstrap.min.js'
import './components/bootstrap.bundle.min.js'
import './components/bootstrap.min.css'
import './components/external.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HeaderIndex from './components/index/HeaderIndex.jsx'
import MainIndex from './components/index/MainIndex.jsx'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <HeaderIndex></HeaderIndex>
      <MainIndex></MainIndex>
      <Footer></Footer>

    </>
  )
}

export default App
