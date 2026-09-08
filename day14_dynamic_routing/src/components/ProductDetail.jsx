import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router'
import axios from 'axios';

const ProductDetail = () => {
    let {id}=useParams();
    const [singleProductData, setSingleProductData] = useState({});
    console.log(singleProductData)
    let getSingleProductData= async ()=>{
        try {
            let res =await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSingleProductData(res.data)
        } catch (error) {
            console.log("error:",error)
        }
    }
    useEffect(()=>{
        getSingleProductData()
    },[])
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Product Image */}
                <div className="flex items-center justify-center bg-gray-50 rounded-xl p-10">
                    <img
                        src={singleProductData.image}
                        alt={singleProductData.title}
                        className="w-80 h-80 object-contain hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-center">

                    {/* Category */}
                    <p className="text-sm text-purple-600 uppercase font-semibold mb-3">
                        {singleProductData.category}
                    </p>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                        {singleProductData.title}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-5">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-md">
                            ⭐ {singleProductData.rating?.rate}
                        </span>

                        <span className="text-gray-500">
                            ({singleProductData.rating?.count} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        ${singleProductData.price}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 leading-7 mb-8">
                        {singleProductData.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">

                        <button className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                            Add to Cart
                        </button>

                        <button className="flex-1 border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                            Buy Now
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </div>
)
}

export default ProductDetail