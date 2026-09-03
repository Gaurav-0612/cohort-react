import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex p-4 justify-between align-center bg-gray-200 '>
        <div>
            <h1>logo</h1>
        </div>
        <div className='flex justify-between align-center gap-6'>
            
                   <NavLink to={"/"}>Home</NavLink>
                   <NavLink to={"/about"}>About</NavLink>
                   <NavLink to={"/contact"}>Contact</NavLink>
                 </div>
                <button>login</button>
    </div>
  )
}

export default Navbar