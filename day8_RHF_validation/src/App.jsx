import React from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Card from './components/Card'
const App = () => {
  const [toggle, setToggle] = React.useState(true)
   const [users, setUsers] = React.useState([]);
  return (
    <div className='p-4'>
      <Navbar setToggle={setToggle} />
      <div className='p-4 gap-4 flex  justify-center items-center'>
        {toggle ? <Form setToggle={setToggle} setUsers={setUsers} /> :  users.map((elem) => {return <Card user={elem} setToggle={setToggle} />;})}
      </div>

    </div>
  )
}

export default App