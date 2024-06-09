import React from 'react'

function Title({title , subTitle}) {
  return (
    <div className="text-center mt-4 mb-10">
        <h1 className='text-primary font-bold text-[35px] mb-2'>{title}</h1>
        <p className='text-gray-400 font-normal text-[17px]'>{subTitle}</p>
    </div>
  )
}

export default Title
