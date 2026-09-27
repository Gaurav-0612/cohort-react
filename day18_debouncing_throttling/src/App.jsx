import React, { useEffect ,useState } from 'react'
import axios from 'axios'
const App = () => {
  const [searchData,setSearchData] = useState(null)
  const [productData,setProductData] = useState([])

  const getproduct= async ()=>{
  let res = await axios.get('https://fakestoreapi.com/products');
  setProductData(res.data)
  console.log(res)
  }
  let filterData= ()=>{
    let res = productData.filter((val)=>{
      return val.title.toLowerCase().includes(searchData.toLowerCase())
    })
    setProductData(res)
  }
  useEffect(()=>{
    filterData()
  },[searchData])

  useEffect(()=>{
    getproduct();
  },[])

  return (
    <div>
      <h1>Debouncing</h1>
      <input onChange={(e)=>{setSearchData(e.target.value)}} type="text"  placeholder='search...'/>
      {
        productData.map((val)=>{
          return <h1 key={val.id}> {val.title}</h1>
        })
      }

    </div>
  )
}

export default App