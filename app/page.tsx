import React from 'react'
import Link from 'next/link'
import AllUser from './components/AllUser'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <h1 className='text-center text-3xl'>
        user crud operations
      </h1>
      <div className='flex justify-center mt-7'>
      <Link className='bg-gray-400 px-4 py-2 ' href={"/createuser"} >create user</Link> 

      </div>
      <AllUser />
      
      
    </>
  )
}

export default page