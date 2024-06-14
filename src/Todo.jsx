import React from 'react'
import './App.css'
import './components/customJs.js'
import './components/bootstrap.min.js'
import './components/bootstrap.bundle.min.js'
import './components/bootstrap.min.css'
import './components/external.css'
import HeaderTodo from './components/todo/HeaderTodo.jsx'
import MainTodo from './components/todo/MainTodo.jsx'
import ModalTodo from './components/todo/ModalTodo.jsx'

function Todo() {

  return (
    <>
      <HeaderTodo></HeaderTodo>
      <MainTodo></MainTodo>
      <ModalTodo></ModalTodo>
    </>
  )
}

export default Todo
