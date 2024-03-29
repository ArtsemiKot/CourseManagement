import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navigation from './pages/Navigation/Navigation'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/nav' element = {<Navigation></Navigation>}></Route>
    </Routes>
    </>
  )
}

export default App
