import React from "react";
import { useState, useEffect, useRef } from "react";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ntj0rvr2",
  dataset: "production",
  apiVersion: "2024-01-27",
  useCdn: false,
});

function Card({ name, price, img, deal }) {
  const quantity = useRef(null);
  function quantityChange(add) {
    const amount = quantity.current.value;
    if (add) quantity.current.value++;
    if (!add && amount > 0) quantity.current.value--;
  }
  return (
    <div className=" md:max-w-sm max-w-[85%] bg-white w-full mx-auto shadow-md border-[1px] rounded-lg  ">
      <img className=" aspect-square  object-cover  " src={img} alt="" />
      <div className="p-4">
        <h2 className="text-2xl font-">{name}</h2>
        <h2 className="text-2xl  my-2">
          {deal ? (
            <>
              ${deal}
              <span className="text-gray-400 font-thin line-through ml-2">
                ${price}
              </span>
            </>
          ) : (
            <>${price}</>
          )}
        </h2>
        <div className="flex  gap-4">
          <div className="text-xl w-1/2 flex border-[1px] rounded-lg  border-black overflow-hidden">
            <button className="font-bold  bg-gray-100 px-3 border-r-[1px] border-black" onClick={() => quantityChange(false)}>
              -
            </button>
            <input
              className="quantity w-full p-1  text-center "
              min={0}
              ref={quantity}
              defaultValue={0}
              type="number"
            />
            <button className="font-bold  bg-gray-100 px-3 border-l-[1px] border-black" onClick={() => quantityChange(true)}>
              +
            </button>
          </div>
          <button className="px-4 py-1 border-2 w-1/2 border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-600 rounded-lg text-lg font-semibold">
            Order
          </button>
        </div>
      </div>
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
        deal,
        "img":img.asset->url
      }`);
      setData(products);
      console.log(products);
    }
    getProducts();
  }, []);
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 justify-center items-center gap-5 px-4">
      {productsData ? (
        <>
          {productsData.map((data, i) => {
            return <Card key={i} {...data} />;
          })}
        </>
      ) : (
        <>no</>
      )}
    </div>
  );
}
