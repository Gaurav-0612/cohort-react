import React, { useContext } from 'react'
import {NavLink} from 'react-router'
import { Auth } from '../context/AuthContext'
const Navbar = () => {
  const {setLoggedInUser}=useContext(Auth)
  return (
    <div className='flex flex-col border-r border-grey-300 p-4 justify-between'>
       <div className='flex flex-col gap-4'>
         <h1 className='text-4xl '>E-Comm</h1>
        <div className='flex flex-col gap-6 ml-5 p-4'>
            <NavLink className={({isActive})=> isActive? 'font-semibold text-red-600 border-b border-grey-200' : 'text-black border-b border-grey-200'}  to={"/main"} end>Home</NavLink>
            <NavLink className={({isActive})=> isActive? 'font-semibold text-red-600 border-b border-grey-200' : 'text-black border-b border-grey-200'}  to={"/main/user"}>Users</NavLink>
            <NavLink className={({isActive})=> isActive? 'font-semibold text-red-600 border-b border-grey-200' : 'text-black border-b border-grey-200'}  to={"/main/product"}>Products</NavLink>
        </div>
       </div>
        <button onClick={()=> {localStorage.removeItem("loggedInUser");
          setLoggedInUser(null)
        }} className='py-3 bg-red-600 text-white rounded cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar