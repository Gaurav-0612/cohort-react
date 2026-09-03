import React from 'react'
import { Routes,Route } from 'react-router'
import Contact from '../Pages/Contact.Jsx'
import About from '../Pages/About.Jsx'
import Home from '../Pages/Home.Jsx'
import Detail from '../Pages/Detail'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}>
            <Route path='detail' element={<Detail/>}></Route>
            </Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    </div>
  )
}

export default AppRoutes