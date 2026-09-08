import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='h-20 flex justify-between items-center bg-yellow-200 p-6 rounded'>
        <div>
            <img className='w-15 rounded-full' src="https://imgs.search.brave.com/lwi4ZHVQpvTYHnK3pb56dwrKShkdBDLng1nYkABs6Yo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/LzgwMzA1NjdfNDAw/LnBuZz90PTYzNzgz/NzQ3NDIzMDAwMDAw/MA" alt="" />
        </div>
        <div className='flex justify-center items-center gap-4'>
           <NavLink to={"/"}  >Home</NavLink>
           <NavLink to={"/about"}  >About</NavLink>
           <NavLink to={"/product"}  >Products</NavLink>
        </div>
        <button className='font-bold w-25 h-10 cursor-pointer text-blue-600 bg-white rounded'>Create Card</button>
    </div>
  )
}

export default Navbar