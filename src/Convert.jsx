import React from 'react'

import './App.css'
import './components/customJs.js'
import './components/bootstrap.min.js'
import './components/bootstrap.bundle.min.js'
import './components/bootstrap.min.css'
import './components/external.css'
import Navbar from './Navbar.jsx'
import Footer from './components/Footer.jsx'
import Converter from './components/convert/Coverter.jsx'
import HeaderConvert from './components/convert/HeaderConvert.jsx'

function Covert() {

  return (
    <>
      <HeaderConvert></HeaderConvert>
      <Converter></Converter>
    </>
  )
}

export default Covert
