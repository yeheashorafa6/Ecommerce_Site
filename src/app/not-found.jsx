import Link from 'next/link'
import React from 'react'

function notFound() {
  return (
   <div className='h-dvh bg-black flex justify-center items-center'>
     <div className='p-10 text-center'>
      <h2 className='text-[#fa4]'>Not Found</h2>
      <p className='text-gray-300'>sorry ! the page are looking for does not found</p>
      <Link href={"/"} className='text-teal-600'>Go To Home Page</Link>
    </div>
   </div>
  )
}

export default notFound
