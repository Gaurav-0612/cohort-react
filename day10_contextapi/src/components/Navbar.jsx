import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite'

const Navbar = () => {
  let {setisCartOpen}=useContext(MyShop);
  return (
    <div className='flex justify-between items-center p-4 bg-gray-400 rounded'>
        <div>
            <img className='w-16 rounded-[50%]' src="https://imgs.search.brave.com/2ostfWzMG1TyTlkVH7abjszO3K7R_JxfFpaQ3q2cNuE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly80Zld2R3Ffd2cx/RkNfYnVDWHVtcUhL/c0I2S2s9LzB4MDoy/MDAweDIwMDAvZml0/LWluLzUwMHg1MDAv/OTlkZXNpZ25zLWNv/bnRlc3RzLWF0dGFj/aG1lbnRzLzEyMi8x/MjI5NzEvYXR0YWNo/bWVudF8xMjI5NzEx/MTc" alt="" />
        </div>
        <div className='flex gap-4 justify-center items-center '>
            <h1 className='text-lg font-bold cursor-pointer hover:text-blue-500'>Home</h1>
            <h1 onClick={()=>setisCartOpen(true)} className='text-lg font-bold cursor-pointer hover:text-blue-500'>Products</h1>
            <h1 onClick={()=>setisCartOpen(false)} className='text-lg font-bold cursor-pointer hover:text-blue-500'>Cart</h1>
        </div>
        <button className='w-30 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600'>Login</button>
    </div>
  )
}

export default Navbar