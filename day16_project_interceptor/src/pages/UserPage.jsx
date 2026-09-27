import React, { useState ,useEffect } from 'react'
import axios from 'axios'
import UserCard from '../components/UserCard';
import {axiosInstance} from '../config/axiosInstance'
const UserPage = () => {
    const [userCard,setUserCard]=useState([]);
    const [isLoading,setIsLoding]=useState(true)
    const getUserData=async ()=> {
        try {
            let res = await axiosInstance.get('users')
            console.log(res)
            setUserCard(res.data)
            setIsLoding(false)
        } catch (error) {
            console.log("error in api is ",error)
        }
    }
    useEffect(()=>{
        getUserData();
    },[])
    if(isLoading) return <h1 className='text-4xl'>Loading User...</h1>
  return (
    <div className='grid grid-cols-4 gap-4'>
        {
            userCard.map((val)=>{
                return <UserCard key={val.id} user={val}/>
            })
        }
    </div>
  )
}

export default UserPage