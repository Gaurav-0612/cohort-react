import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const home = () => {
  let navigate=useNavigate();
  return (
    <div>this is home page
      <button onClick={()=>navigate("/detail")}>click</button>
      <Outlet/>
    </div>
    
  )
}

export default home