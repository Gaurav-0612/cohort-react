import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-200 rounded-md">
        <img width="50" height="50" className="rounded-full object-cover" src="https://imgs.search.brave.com/rdrRUSvC1DF49_WgTUHWC5SxYaCWHwk_hLpvkvvgVHU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/NzY2NjM3Ni92ZWN0/b3IvZHluYW1pYy1i/cmlnaHQtc3VuLXJh/eXMtYnJhbmQtY29t/cGFueS1zeW1ib2wu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVA1elhNQUM4NmJj/MFVITHNOYXZVRDZy/dzNva1VJcG51Tmg0/SU9mR3hKcnc9" alt="logo" />
        <div className="flex gap-6 ">
            <h1 className="cursor-pointer hover:text-blue-500">Home</h1>
            <h1 className="cursor-pointer hover:text-blue-500">About</h1>
            <h1 className="cursor-pointer hover:text-blue-500">Contact</h1>
            <h1 className="cursor-pointer hover:text-blue-500">Services</h1>
        </div>
        <button onClick={() => setToggle((prev) => !prev)} className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create Card</button>
    </div>
  )
}

export default Navbar