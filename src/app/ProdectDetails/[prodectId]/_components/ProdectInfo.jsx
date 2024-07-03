"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import SkeletonProdect from "./SkeletonProdect";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import cartApis from "./../../../../utils/cartApis";
import { CartContext } from "./../../../../app/_CartsContext/CartContext";

function ProdectInfo({ singleProdectDetails }) {

  const {carts, setCarts} = useContext(CartContext);

 
  const { user } = useUser();
  
  const router = useRouter();
  
  

  // FOUNCTION
  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
          products: [singleProdectDetails?.id],
        },
      };
      cartApis
        .addToCart(data)
        .then((res) => {
          console.log("Create Data Seccessfully");
          setCarts(oldCart =>[
            ...oldCart ,
            {
              id : res?.data?.data?.id,
              prodect : singleProdectDetails
            }
          ])
        })
        .catch((err) => {
          console.error("Error Creating Data", err);
        });
    }
  };
  // == FUNCTION ==
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative md:h-80 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-80">
            {singleProdectDetails?.attributes?.banner.data.attributes.url ? (
              <Image
                fill
                alt=""
                src={
                  singleProdectDetails?.attributes?.banner.data.attributes.url
                }
                className="absolute inset-0"
              />
            ) : (
              <div className="md:h-80 overflow-hidden sm:h-80 lg:order-last lg:h-80 bg-slate-200 rounded-lg animate-pulse"></div>
            )}
          </div>

          <div className="lg:py-24">
            {singleProdectDetails?.id ? (
              <>
                <h2 className="text-3xl font-bold sm:text-4xl text-primary">
                  {singleProdectDetails?.attributes?.title}
                </h2>

                <p className="mt-4 text-gray-500 font-light">
                  {
                    singleProdectDetails?.attributes?.description[0].children[0]
                      .text
                  }
                </p>

                <h3 className={`text-gray-800 mt-4  font-bold`}>
                  {singleProdectDetails?.attributes?.category}
                </h3>

                <h2
                  className={`${
                    singleProdectDetails?.attributes?.instantDelivery === true
                      ? `text-gray-800`
                      : `text-gray-400 font-light`
                  } mt-4`}
                >
                  {singleProdectDetails?.attributes?.instantDelivery ? (
                    <LuBadgeCheck className="inline-flex text-green-500 mr-3 text-[20px] mb-1" />
                  ) : (
                    <RxCrossCircled className="inline-flex text-red-500 mr-3 text-[20px] mb-1" />
                  )}
                  Eligible For Instant Delivery
                </h2>

                <h2 className="mt-4 text-textCol">
                  Price :{" "}
                  <span>{singleProdectDetails?.attributes?.price} $</span>
                </h2>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="inline-flex mt-8  rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-600 focus:outline-none"
                >
                  Add To Card{" "}
                  <span className="mt-1 ms-2">
                    <FaCartShopping />
                  </span>
                </button>
              </>
            ) : (
              <SkeletonProdect />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProdectInfo;
