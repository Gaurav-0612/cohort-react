import { createContext , useState } from "react";

export let MyShop=createContext();

export const MyShopContextProvider=({children})=>{
    const [isCartOpen,setisCartOpen] = useState(true);
const [cartItems,setcartItems]=useState([])
    return (
        <MyShop.Provider value={{isCartOpen,setcartItems,cartItems,setisCartOpen}}>{children}</MyShop.Provider>
)
};