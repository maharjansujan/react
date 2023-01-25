// import React, { useMemo, useState } from 'react'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Contact from './pages/Contact'
import Detail from './pages/Detail'


const App = () => {



  return (
    <div>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

