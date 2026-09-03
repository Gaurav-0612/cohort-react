import React from 'react'
import { useState } from 'react'
 

const web = () => {
    
    const [formData, setFormData] = useState({});
  
  let handleClick = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
    
  }
  return (
    <div className='p-5 flex flex-col gap-3 justify-center items-center align-middle'>
        <input name="Name" onChange={handleClick} className=' w-100 border border-gray-300 rounded-sm p-2' type="text" placeholder="Name" />
        <input name="email" onChange={handleClick} className=' w-100 border border-gray-300 rounded-sm p-2' type="text" placeholder="Email" />
        <input name="age" onChange={handleClick} className=' w-100 border border-gray-300 rounded-sm p-2' type="text" placeholder="Age" />
        <button onClick={(e)=>{
            e.preventDefault();
            const data={
                Name: formData.Name,
                email: formData.email,
                age: formData.age
            }
            console.log(data);
        }}className='bg-blue-600 text-white px-44 py-2 rounded-sm hover:bg-blue-700'>Submit</button>
        <h1>Name is - {formData.Name}</h1>
        <h2>Email is - {formData.email}</h2>
        <h3>Age is - {formData.age}</h3>
    </div>
  )
}

export default web