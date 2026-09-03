import React from 'react'
import { useState } from 'react'
const App = () => {
  const [count, setCount] = useState(0);
      const [user, setUser] = useState("akash");

  return (
    <div>
      
      
      <h1>Count is - {count}</h1>
      <h2>User is - {user}</h2>
      <button onClick={() => setCount(count + 1)} className='m-2 p-2 bg-blue-600 text-white rounded-sm'>Increment</button>
      <button onClick={() => setUser("Gaurav")} className='m-2 p-2 bg-green-600 text-white rounded-sm'>Change user</button>
      </div>
  )
}

export default App