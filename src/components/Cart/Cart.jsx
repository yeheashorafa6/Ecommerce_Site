import { CartContext } from "./../../app/_CartsContext/CartContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function Cart() {
  const {carts , setCarts} = useContext(CartContext);
  console.log(carts)
  return (
    <div
      className="h-[300px] w-[250px] bg-gray-100 z-10 rounded-md shadow-sm
    absolute mx-10 right-10 top-12 p-5 overflow-auto"
    >
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
         {
          carts?.map((item)=>{
            return(
              <li className="flex items-center gap-4" key={item.id}>
              <Image
              src = {item?.products?.attributes?.banner?.data?.attributes?.url} 
              width={110}
              height={100}
              alt={`${item?.products?.attributes?.banner?.data?.attributes?.url}`}
              className="size-16 rounded object-cover"
              />
  
              <div>
                <h3 className="text-md text-primary line-clamp-1">{item?.products?.attributes?.title}</h3>
  
                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline text-gray-800 text-[13px]">Category : </dt>
                    <dd className="inline  text-gray-500 text-[10px] line-clamp-1"> {item?.products?.attributes?.category}</dd>
                  </div>
                  <div>
                    <dt className="inline text-gray-800 text-[13px]">Price : </dt>
                    <dd className="inline text-gray-500 text-[13px] line-clamp-1">{item?.products?.attributes?.price}</dd>
                  </div>
                </dl>
              </div>
            </li>
            )
          })
         }
        </ul>
      </div>
      <div className="space-y-4 text-center mt-4">
        <Link
          href="/Cart"
          className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
        >
          View my cart ({carts?.length})
        </Link>

        <Link
          href="/"
          className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart;
