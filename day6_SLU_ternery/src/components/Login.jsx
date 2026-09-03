import React from 'react'

const Login = ({ setToggle }) => {
    return (
        <div className="bg-gray-200 w-90 p-6 rounded-xl flex flex-col gap-2">
            <h1>Login</h1>
            <form className="flex flex-col gap-4" action="">
                <input className="p-2 border border-gray-400 rounded " type="text" placeholder="Email" />
                <input className="p-2 border border-gray-400 rounded " type="password" placeholder="Password" />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded">Login</button>
            </form>
            <p className="text-gray-600">Don't have an account? <span onClick={() => setToggle(prev => !prev)} className="cursor-pointer text-blue-500 ">Register</span></p>
        </div>
    )
}

export default Login