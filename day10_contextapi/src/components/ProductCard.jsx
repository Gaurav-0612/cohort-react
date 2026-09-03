import React from "react";
import { MyShop } from "../context/MyWebsite";
import { useContext } from "react";

const ProductCard = ({product}) => {
  let {setcartItems}=useContext(MyShop);
  return (
    <div className=" w-72  rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
      
      {/* Product Image */}
      <div className="h-52 w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition duration-300 hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h2 className="mb-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        <p className="mb-3 text-sm text-gray-500">
          {product.description?.slice(0, 80)}...
        </p>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-1">
          <span className="text-yellow-400">★</span>
          <span className="text-sm font-medium text-gray-600">
            {product.rating?.rate || 4.5}
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          <button onClick={()=>  setcartItems((prev)=>[...prev,product])} className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;