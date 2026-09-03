import { useContext } from "react";

export let MyStore=useContext();

export const MyContextProvider=({children})=>{
    return(<MyContextProvider>{children}</MyContextProvider>)
}