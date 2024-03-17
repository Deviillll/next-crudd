"use client"
import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


const CreateUser = () => {
    const router = useRouter()
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [age, setage] = useState("")

    const handleform = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!name || !email || !age){
            alert('please fill all the input')
            return
        }
        const user = {
            name,
            email,
            age
        }
        console.log(user)
        await axios.post('/api/user',user)
        setname("")
        setemail("")
        setage("")
        router.push('/')
        
    }
  return (
    <div className='w-screen  h-screen flex flex-col justify-center items-center '>
  


<form onSubmit={handleform}>

<div className='mt-7'>

<label
  htmlFor="Username"
  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="text"
    id="Username"
    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 h-12"
    placeholder="Username"
    value={name}
    onChange={(e)=>setname(e.target.value)}
    />

  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
    >
    Username
  </span>
</label>
    </div>


    <div className='mt-7'>
        {/*
  Heads up! 👋
  
  Plugins:
  - @tailwindcss/forms
*/}

<label
  htmlFor="UserEmail"
  className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <span className="text-xs font-medium text-gray-700"> Email </span>

  <input
    type="email"
    id="UserEmail"
    placeholder="anthony@rhcp.com"
    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
    value={email}
    onChange={(e)=>setemail(e.target.value)}
    />
</label>
    </div>



    <div className='mt-7'>
        {/*
  Heads up! 👋
  
  Plugins:
  - @tailwindcss/forms
*/}

<label
  htmlFor="age"
  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
  
    type="text"
    id="age"
    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 h-12"
    placeholder="age"
    value={age}
    onChange={(e)=>setage(e.target.value)}
  />

  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
    >
    Age
  </span>
</label>
    </div>
    <div className='mt-7 '>
        <button className='bg-gray-400 px-4 py-2 ' type="submit">create user</button>
    </div>
      </form>
        </div>
  )
}

export default CreateUser