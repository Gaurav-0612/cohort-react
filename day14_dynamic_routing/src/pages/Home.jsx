import React, { useEffect } from 'react'
import ProductCard from "../components/ProductCard"
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'
import axios from "axios"

const Home = () => {
    const {productData , setProductData}=useContext(MyStore);

     let getProductData=async () => {
            try {
                let res= await axios.get("https://fakestoreapi.com/products");
                setProductData(res.data)
            } catch (error) {
                console.log("error is",error)
            }
        };

        useEffect(()=>{
            getProductData()
        },[]);
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
       {
        productData.map((val)=>{
            return <ProductCard key={val.id} products={val}/>
        })
       }
    </div>
  )
}

export default Home