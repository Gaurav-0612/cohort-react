import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200">

      {/* Product Image */}
      <div className="h-64 flex items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block text-xs font-semibold uppercase tracking-wide text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mt-3 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-md">
            <span className="text-green-700 font-bold">
              {product.rating.rate}
            </span>
            <span>⭐</span>
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-5">
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>

          {/* Add to Cart */}
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-semibold transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;