import React from 'react'
import { MyStore } from '../context/MyContext'
import { useContext } from 'react'

const Navbar = () => {
  let {setIsCartOpen}=useContext(MyStore)
  return (
    <div className='h-20 flex justify-between items-center bg-black p-6 rounded'>
        <div>
            <img className='w-15 rounded-full' src="https://imgs.search.brave.com/lwi4ZHVQpvTYHnK3pb56dwrKShkdBDLng1nYkABs6Yo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/LzgwMzA1NjdfNDAw/LnBuZz90PTYzNzgz/NzQ3NDIzMDAwMDAw/MA" alt="" />
        </div>
        <div className='flex justify-center items-center gap-4'>
            <h1 className='font-bold  cursor-pointer text-white'>Home</h1>
            <h1 onClick={()=>setIsCartOpen(false)} className='font-bold  cursor-pointer text-white'>Products</h1>
            <h1 onClick={()=>setIsCartOpen(true)}  className='font-bold  cursor-pointer text-white'>Cart</h1>
        </div>
        <button className='font-bold w-25 h-10 cursor-pointer text-blue-600 bg-white rounded'>Create Card</button>
    </div>
  )
}

export default Navbar