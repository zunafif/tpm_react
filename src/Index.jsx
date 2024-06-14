import React from 'react'
import './App.css'
import './components/customJs.js'
import './components/bootstrap.min.js'
import './components/bootstrap.bundle.min.js'
import './components/bootstrap.min.css'
import './components/external.css'
import Footer from './components/Footer.jsx'
import HeaderIndex from './components/index/HeaderIndex.jsx'
import MainIndex from './components/index/MainIndex.jsx'

function Index() {

  return (
    <>
      <HeaderIndex></HeaderIndex>
      <MainIndex></MainIndex>
    </>
  )
}

export default Index