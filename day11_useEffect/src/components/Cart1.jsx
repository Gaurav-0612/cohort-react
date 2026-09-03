import React, { useEffect } from 'react'

const Cart = () => {
  useEffect(() => {
    const interval=setInterval(() => {
      console.log("hello")
    }, 1000)
    return ()=> {
      clearInterval(interval)
    }
  },[])
  return (  
    <div>cart is rendering
    </div>
  )
}

export default Cart