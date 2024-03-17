import UpdateUser from '@/app/components/UpdateUser'
import React from 'react'

const page = ({params}:any) => {
  const id = params.id
  return (
    <div>
      <UpdateUser />
    </div>
  )
}

export default page
