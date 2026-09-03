import React from 'react'

const Card = ({user, deleteUser,ind, setUpdatedData,setToggle}) => {
  return (
    <div className="w-80 h-120 bg-gray-100 shadow-md rounded-md p-6">
            <img className='w-80 h-60 rounded' src={user.image_url} alt="Image" />
        <h1 className="text-xl font-bold">Name: {user.name}</h1>
        <h1 className="text-lg text-gray-600">Email: {user.email}</h1>
        <h1 className="text-lg text-gray-600">Age: {user.age}</h1>
        <h1 className="text-lg text-gray-600">Mobile: {user.mobile}</h1>
        <div className="flex justify-between gap-4 mt-4">
          <button onClick={() => {setUpdatedData(user) ; setToggle(prev => !prev)}} className="bg-blue-500 w-25 text-white p-2 rounded-md">update</button>
        <button onClick={() => deleteUser(ind)} className="bg-red-500 text-white w-25 p-2 rounded-md">delete</button>
        </div>
    </div>
  )
}

export default Card