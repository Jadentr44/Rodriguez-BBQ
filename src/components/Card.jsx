import React from 'react'

export default function Card({name,price,img}) {
  return (
    <div className='p-4 md:max-w-sm max-w-[85%] w-full mx-auto shadow-md border-[1px] rounded-lg flex flex-col items-center'>
      <div className='w-full aspect-square bg-red-300 bg-no-repeat bg-center bg-cover' style={{backgroundImage:'url(https://www.onceuponachef.com/images/2022/06/baby-back-ribs-18-1200x1397.jpg)'}}>

      </div>
      <h2 className='text-xl font-medium'>{name}</h2>
      <h2 className='text-2xl font-semibold my-2'>${price}</h2>
      <button className='px-4 py-1 border-2 rounded-md text-lg'>Order</button>
    </div>
  )
}
