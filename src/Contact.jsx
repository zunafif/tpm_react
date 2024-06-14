
import './App.css'
import './components/customJs.js'
import './components/bootstrap.min.js'
import './components/bootstrap.bundle.min.js'
import './components/bootstrap.min.css'
import './components/external.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HeaderContact from './components/contact/HeaderContact.jsx'
import MainContact from './components/contact/MainContact.jsx'
import ModalContact from './components/contact/ModalContact.jsx'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <HeaderContact></HeaderContact>
      <MainContact></MainContact>
      <ModalContact></ModalContact>
      <Footer></Footer>

    </>
  )
}

export default App
