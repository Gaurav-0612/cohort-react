import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainLayout from '../layout/MainLayout'
import ProtectedRoute from './ProtectedRoute'
import ProductPage from '../pages/ProductPage'
import UserPage from '../pages/UserPage'
import HomePage from '../pages/HomePage'
const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: '/',
            element: <AuthLayout />,
            children: [{
                path: "",
                element: <LoginPage />
            },
            {
                path: "/register",
                element: <RegisterPage />
            }]

        },
        {
            path: "/main",
            element: <ProtectedRoute />,
            children: [{
                path: "",
                element: <MainLayout />,
                children: [{
                    path: "",
                    element: <HomePage />
                },
                {
                    path: "/main/user",
                    element: <UserPage />
                },
                {
                    path: "/main/product",
                    element: <ProductPage />
                }]
            }]
        }
    ])
    return <RouterProvider router={router} />
}

export default AppRoutes