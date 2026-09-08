import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Main from '../layout/main'
const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:'/',
            element:<Main/>,
            childern:[{ 
            path:"",
            element:<Home/>

        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/services",
            element:<Services/>
        },]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes