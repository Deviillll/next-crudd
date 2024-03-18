"use client"
import axios from 'axios';
import React,{useState,useEffect} from 'react'

const UpdateUser = ({singleUser}:any) => {
  const {age, name, email,_id} = singleUser;
  const [newname, setnewname] = useState("")
  const [newemail, setnewemail] = useState("")
  const [newage, setnewage] = useState("")
  useEffect(() => {
    const UpdateUser=async()=>{
      const res=await axios.put(`/api/user/${_id}`,{
        name:newname,
        email:newemail,
        age:newage
      })
      console.log(res)
    }
      UpdateUser()
    
  
   
  }, [])
  


  return (
    <>
    <h1>Update user</h1>
    <div className='h-screen w-screen flex justify-center items-center '>
      <form action="" className='space-y-12 border border-gray-400 border-4 px-14 py-8'>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" defaultValue={name} onChange={(e)=>{
            setnewname(e.target.value)
          }} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" defaultValue={email} onChange={(e)=>{
            setnewemail(e.target.value)
          }} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" name="age" id="age" defaultValue={age} onChange={(e)=>{
            setnewage(e.target.value)
          }} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
      
    </>
  )
}

export default UpdateUser
