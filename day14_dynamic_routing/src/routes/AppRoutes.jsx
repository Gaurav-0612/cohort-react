import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import {Routes,Route} from 'react-router'
import ProductDetail from '../components/ProductDetail'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={
                <ProtectedRoute><About/></ProtectedRoute>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/detail/:id" element={<ProductDetail/>}></Route>
        </Routes>
    </div>
  )
}

export default AppRoutes