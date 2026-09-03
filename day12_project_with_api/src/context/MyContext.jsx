import { createContext,useState} from "react"
export const MyStore = createContext();

export const MyContextProvider=({children})=>{
     const [cartItems,setCartItems]=useState([])
     const [isCartOpen,setIsCartOpen]=useState(false);
     const incrementQuantity=(id)=>{
        setCartItems((prev)=>{
            return prev.map((val)=>{
                return val.id ===id ? {...val,quantity : val.quantity +1}: val ;
            })
        })
     }
     const decrementQuantity=(id)=>{
        setCartItems((prev)=>{
            return prev.map((val)=>{
                return val.id ===id ? {...val,quantity : val.quantity -1}: val ;
            })
        })
     }
    return (<MyStore.Provider value={{cartItems,setCartItems,isCartOpen,setIsCartOpen,incrementQuantity,decrementQuantity}}>{children}</MyStore.Provider>)
}