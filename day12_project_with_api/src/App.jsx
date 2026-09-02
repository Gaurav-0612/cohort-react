import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import CardItem from './components/CardItem'
import Products from './components/Products'
import axios from 'axios'
import { MyStore } from './context/MyContext'
import {useContext} from 'react'

const App = () => {
  const {isCartOpen,cartItems} = useContext(MyStore)
  const [productsData,setProductsData]=useState([])
 
  const getProductData= async () => {
    try{
      let res=await axios.get('https://fakestoreapi.com/products')
      setProductsData(res.data)
    }catch(error){
      console.log("error in api ",error);
    }
  }
  useEffect(()=>{
 getProductData();
  },[])
 
  
  return (
    <div className='p-4 h-screen flex flex-col gap-6' >
      <Navbar />
      {
        isCartOpen ? <div>{cartItems.map((elem)=>{
          return (<CardItem key={elem.id} products={elem}/>);
        })}</div> : <div className='grid grid-cols-4 gap-4'>{productsData.map((elem)=>{
          let isInCart=cartItems.find((val)=> val.id === elem.id);
          return (<Products products={elem} key={elem.id} isInCart={isInCart} />);
        }) 
        }</div>
}
    </div>
  )
}

export default App