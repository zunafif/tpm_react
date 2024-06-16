import React from 'react'
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import './components/bootstrap.min.js'
import './components/bootstrap.bundle.min.js'
import './components/bootstrap.min.css'
import './components/external.css'
import Convert from './Convert.jsx'
import Index from './Index.jsx'
import Contact from './Contact.jsx';
import Todo from './Todo.jsx';
import Footer from './components/Footer.jsx'
import LiveClockUpdate from './components/liveClock/clock.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
              <a class="navbar-brand" href="#">Biodata</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                
                    <span class="dropdown-item nav-link active" aria-current="page"><Link to="/">Home</Link></span>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Menu
                      </a>
                      <ul class="dropdown-menu">
                          <li><span class="dropdown-item"><Link to="/converter">Temp Converter</Link></span></li>
                          <li><span class="dropdown-item"><Link to="/todo">To Do List</Link></span></li>
                          <li><span class="dropdown-item"><Link to="/contact">Contact Me</Link></span></li>
                      </ul>
                  </li>
                  </ul>
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <LiveClockUpdate></LiveClockUpdate>
                      </li>
                  </ul>
              </div>
              </div>
          </nav>
          <Routes>
              <Route path="/" element={<Index/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/todo" element={<Todo/>}></Route>
              <Route path="/converter" element={<Convert/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer></Footer>

    </>
  )
}

export default App
