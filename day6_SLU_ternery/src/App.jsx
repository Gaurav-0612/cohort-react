import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { useState } from 'react'

const App = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="bg-gray-300 h-screen flex flex-col gap-2 justify-center items-center">
      {toggle ? (<Register setToggle={setToggle} />) : (<Login setToggle={setToggle} />)}
    </div>
  )
}

export default App