import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Card from './Card/Card'

function ProductsCard({productsCard}) {
  return (
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 '>
      {
      productsCard.map((item)=>{
          return(
              <Card prodect={item} key={item.id}/>
          )
      })
    }
   </div>
  )
}

export default ProductsCard
