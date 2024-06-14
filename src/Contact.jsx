import React from 'react'
import './App.css'
import './components/customJs.js'
import './components/bootstrap.min.js'
import './components/bootstrap.bundle.min.js'
import './components/bootstrap.min.css'
import './components/external.css'
import HeaderContact from './components/contact/HeaderContact.jsx'
import MainContact from './components/contact/MainContact.jsx'
import ModalContact from './components/contact/ModalContact.jsx'

function Contact() {

  return (
    <>
      <HeaderContact></HeaderContact>
      <MainContact></MainContact>
      <ModalContact></ModalContact>
    </>
  )
}

export default Contact
