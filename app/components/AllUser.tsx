"use client";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  Link from 'next/link'
import  {useRouter}  from 'next/navigation'
type Props = {}
interface User {
    name: string;
    email: string;
    age: number;
    _id: string;
    }



const AllUser = () => {
    

    const router = useRouter();
    //get all user from api
    const getalluser = async () => {
        const res=await axios.get('/api/user')
        // console.log(res.data.users)
        const user= await res.data.users
        console.log(user)
        setdata(user)
    }
    //store data in usestate hook
    const [data, setdata] =  useState<User[]> ([])
    // run the function 
    useEffect(() => {
        getalluser()
    }, [])
    // delete user
    const deleteUser=async (id:string)=>{
        const confirm=window.confirm('are you sure to delete this user')
        if(!confirm){
            return
        }else{
        await axios.delete(`/api/user/${id}`)
        console.log('user deleted')
        
       
        
           
        }
    }
  return (
    <>
       {data.map((user,) => (
         <div key={user._id} className="flow-root rounded-lg  mt-7 border border-gray-800 py-3 shadow-sm">
         <dl className="-my-3 divide-y divide-gray-100 text-sm">
           <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
             <dt className="font-medium text-gray-900">Name</dt>
             <dd className="text-gray-700 sm:col-span-2">{user.name}</dd>
           </div>
       
           <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
             <dt className="font-medium text-gray-900">E-mail</dt>
             <dd className="text-gray-700 sm:col-span-2">{user.email}</dd>
           </div>
       
           <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
             <dt className="font-medium text-gray-900">Age</dt>
             <dd className="text-gray-700 sm:col-span-2">{user.age}</dd>
           </div>
          
           <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3  sm:gap-4">
          
             <dt className="font-medium text-gray-900"><Link href={`/update/${user._id}`}>update</Link></dt>
             <dt className="font-medium text-gray-900">
                <button onClick ={()=>{
                    deleteUser(user._id)
                }}>delete</button>
             </dt>
              
              
           
          
          
              
              
          


           </div>
       
           
         </dl>
       </div>))}
    </>
  )
}

export default AllUser