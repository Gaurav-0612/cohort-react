import React from 'react'

const CardItem = ({ products }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex gap-5 items-center">

      {/* Image */}
      <div className="w-24 h-24">
        <img
          src={products.image}
          alt={products.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h2 className="font-semibold line-clamp-2">
          {products.title}
        </h2>

        <p className="text-green-600 font-bold mt-2">
          ${products.price}
        </p>
      </div>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg
        hover:bg-red-600"
      >
        Remove
      </button>

    </div>
  )
}

export default CardItem