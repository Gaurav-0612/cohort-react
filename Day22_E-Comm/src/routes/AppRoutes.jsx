import { createBrowserRouter, RouterProvider } from "react-router"
import PublicProtected from "./protected/PublicProtected"
import AuthLayouts from "../app/layouts/AuthLayouts"
import LoginPage from "../features/auth/ui/pages/LoginPage"
import RegisterPage from "../features/auth/ui/pages/RegisterPage"
import MainProtected from "./protected/MainProtected"
import MainLayouts from "../app/layouts/MainLayouts"
import HomePage from "../shared/ui/pages/HomePage"
import ProductPage from "../features/products/ui/pages/ProductPage"
import CartPage from "../features/cart/ui/pages/CartPage"
import OrderPage from "../features/orders/ui/pages/OrderPage"

import React from 'react'

const AppRoutes = () => {
     let router = createBrowserRouter([
        {
            path : '/',
            element : <PublicProtected/>,
            children : [
                {
                    path : '',
                    element : <AuthLayouts/>,
                    children : [
                        {
                            path : '',
                            element : <LoginPage/>
                        },
                        {
                            path : 'register',
                            element : <RegisterPage/>
                        }
                    ]
                }
            ]
        },
        {
            path : '/main',
            element : <MainProtected/>,
            children : [
                {
                    path : "",
                    element : <MainLayouts/>,
                    children : [
                        {
                            path : "",
                            element : <HomePage/>,
                        },
                         {
                            path : "product",
                            element : <ProductPage/>,
                        },
                         {
                            path : "cart",
                            element : <CartPage/>,
                        },
                         {
                            path : "order",
                            element : <OrderPage/>,
                        },
                    ]
                }
            ]
        },
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes