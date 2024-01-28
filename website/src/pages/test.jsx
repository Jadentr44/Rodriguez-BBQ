import React from 'react'
import { useState,useEffect } from 'react';
import { createClient } from 'next-sanity'


const client = createClient({
  projectId: "ntj0rvr2",
  dataset: "production",
  apiVersion: "2024-01-27",
  useCdn: false
});

export default  function test() {
  const [productsData,setData]= useState(undefined)
  useEffect(() => {
    async function getProducts(){
      let products =  await client.fetch(`*[_type == "product"]{
        name,
        price,
        "img":img.asset->url
      }`);
      setData(products)
      // console.log(products)
    }
    getProducts()
  }, [])

  
  
  return (
    <div className='flex justify-center gap-4 h-screen items-center'>
      {productsData && <>{productsData.map((data,i)=>{
        let imgUrl = `` 
        console.log(data)
        return <div className='border-2 p-5' key={i}>
          <img src={data.img} alt="" />
          {data.name}
        </div>
      })}</>}
    </div>
  )
}
