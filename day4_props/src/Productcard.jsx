import React from 'react'

const Productcard = ({product, del}) => {
  return (
    <div className='border-2 border-white p-3 rounded-md h-fit flex flex-col gap-3'>
        <img className='w-50 h-50' src={product.image} alt="image" />
        <h3 className='font-semibold text-white'>{product.title.substring(0, 10)}</h3>
        <p className='text-xm text-white'>{product.category}</p>
        <h3 className='text-green-600'>{product.price}</h3>
        <button onClick={() => del(product.id)} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>Delete</button>
    </div>
  )
}

export default Productcard