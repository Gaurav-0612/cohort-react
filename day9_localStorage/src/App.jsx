import React from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Card from './components/Card'
const App = () => {
  const [toggle, setToggle] = React.useState(true)
  const [users, setUsers] = React.useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  const [updatedData, setUpdatedData] = React.useState(null);

  const deleteUser = (id) => {
    let filterUser = users.filter((val, index) => { return index !== id });
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  }
  return (
    <div className='p-4'>
      <Navbar setToggle={setToggle} />
      <div className='p-4 gap-4 flex  justify-center items-center flex-wrap'>
        {toggle ? <Form updatedData={updatedData} setToggle={setToggle} setUsers={setUsers} users={users} /> : users.map((elem, index) => { return <Card ind={index} setUpdatedData={setUpdatedData} key={elem.id} user={elem} setToggle={setToggle} deleteUser={deleteUser} />; })}
      </div>

    </div>
  )
}

export default App