import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import {axiosInstance} from '../config/axiosInstance'
const ProductPage = () => {
    const [productData,setProductData]=useState([])
    const [IsLoading,setIsLoding]=useState(true)
    const getProductData = async ()=>{
        try {
            let res=await axiosInstance.get('/products')
            console.log(res)
            setProductData(res.data)
            setIsLoding(false)
        } catch (error) {
            console.log("Error is ",error)
        }
    }
    useEffect(()=>{
        getProductData()
    },[])
    if(IsLoading) return <h1 className='text-4xl'>Loading Product...</h1>
  return (
    <div className='grid grid-cols-4 gap-4'>
        {
            productData.map((val)=>{
                return <ProductCard key={val.id} product={val}/>
            })
        }
    </div>
  )
}

export default ProductPage