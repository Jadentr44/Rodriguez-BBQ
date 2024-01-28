import React from "react";
import { useState, useEffect } from "react";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ntj0rvr2",
  dataset: "production",
  apiVersion: "2024-01-27",
  useCdn: false,
});

function Card({ name, price, img }) {
  return (
    <div className="p-4 md:max-w-sm max-w-[85%] w-full mx-auto shadow-md border-[1px] rounded-lg flex flex-col items-center">
      <img className=" aspect-square  object-cover " src={img} alt="" />
      <h2 className="text-xl font-medium">{name}</h2>
      <h2 className="text-2xl font-semibold my-2">${price}</h2>
      <button className="px-4 py-1 border-2 rounded-md text-lg">Order</button>
    </div>
  );
}

export default function Menu() {
  const [productsData, setData] = useState(undefined);
  useEffect(() => {
    async function getProducts() {
      let products = await client.fetch(`*[_type == "product"]{
        name,
        price,
        "img":img.asset->url
      }`);
      setData(products);
      // console.log(products)
    }
    getProducts();
  }, []);
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 justify-center items-center gap-5 px-4">
      {productsData ? <>
      {productsData.map((data,i)=>{
        return <Card {...data} />
      })}
      </> : <>no</>}
    </div>
  );
}
