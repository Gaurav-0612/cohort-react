import React from 'react'
import {useState} from 'react'
import {useRef} from 'react'
const Form = () => {
    const [formData,setFormData]=useState([])
    console.log(formData)
  const formRef=useRef({});
    const handleSubmit=(e)=>{
        e.preventDefault()
         let obj={
        pName:formRef.current.productName.value,
        email:formRef.current.email.value,
        gender:formRef.current.gender.value,
        password:formRef.current.password.value,
    }
    setFormData(obj)
    }
   
    
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center items-center'> 
        <h1>React Hook Form</h1>
        <input ref={(e)=>(formRef.current.productName=e)} className='w-90 p-2 border border-gray-400 rounded ' type="text" name="name" placeholder='Name' />
        <input ref={(e)=>(formRef.current.email=e)} className='w-90 p-2 border border-gray-400 rounded ' type="email" name="email" placeholder='Email' />
        <select ref={(e)=>(formRef.current.gender=e)} className='w-90 p-2 border border-gray-400 rounded ' name="gender">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input ref={(e)=>(formRef.current.password=e)} className='w-90 p-2 border border-gray-400 rounded ' type="password" name="password" placeholder='Password' />
        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Submit</button>
      </form>
    </div>
  )
}

export default Form