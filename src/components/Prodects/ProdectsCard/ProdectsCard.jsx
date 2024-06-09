import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Card from './Card/Card'

function ProdectsCard({prodectsCard}) {
  return (
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 '>
      {
      prodectsCard.map((item)=>{
          return(
              <Card prodect={item} key={item.id}/>
          )
      })
    }
   </div>
  )
}

export default ProdectsCard
