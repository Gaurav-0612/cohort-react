import React from 'react'
import { useState } from 'react'
const Register = ({ setToggle }) => {
    const [productsData, setProductsData] =useState({})
    const [users,setUsers] =useState([])
    console.log(users)
    const handleChange = (e) => {
        const { name, value } = e.target
        setProductsData({ ...productsData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setUsers([...users, productsData])
        setProductsData({
            name: '',
            email: '',
            password: ''
        })
    }
    return (
        <div className="bg-gray-200 w-90 p-6 rounded-xl flex flex-col gap-2">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
                <input value={productsData.name} required name="name" onChange={handleChange} className="p-2 border border-gray-400 rounded " type="text" placeholder="Name" />
                <input value={productsData.email} required name="email" onChange={handleChange} className="p-2 border border-gray-400 rounded " type="text" placeholder="Email" />
                <input value={productsData.password} required name="password" onChange={handleChange} className="p-2 border border-gray-400 rounded " type="password" placeholder="Password" />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded">Register</button>
            </form>
            <p className="text-gray-600">Already have an account? <span onClick={() => setToggle(prev => !prev)} className="cursor-pointer text-blue-500">Login</span></p>
        </div>
    )
}

export default Register