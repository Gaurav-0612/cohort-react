import React from 'react'
import Cart from './components/Cart1'
import Product from './components/Product1'
import { useState } from 'react'
const App = () => {
  const [Toggle, setToggle] = useState(true);
  return (
    <div>
      App is rendering         
      <div>
        <button className='w-10 ' onClick={(toggle)=>{setToggle(prev =>  !prev)}}>change</button>
      </div>
      {Toggle ?(<Product/>):(<Cart/>)
      }
    </div>
  )
}

export default App