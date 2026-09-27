import React, { useEffect, useState } from 'react'
import axios from "axios"
import type { product } from './types';
import ProductCard from './components/productCard';

type Props = {}

const App = (props: Props) => {
  const [products,setProducts] = useState<product[]>([]);
  const getapi = async ()=>{
    try {
      let res = await axios.get("https://fakestoreapi.com/products")
      console.log( res.data)
      setProducts(res.data)
    } catch (error) {
      console.log("error is " ,error)
    }
  }
  useEffect(()=>{
    getapi()
  },[])

  return (
    <div>{
      products.map((val)=>(
        <ProductCard key={val.id} product={val}/>
      ))
    }</div>
  )
}

export default App