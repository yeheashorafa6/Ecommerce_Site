import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiArrowRightThick } from "react-icons/ti";



function Card({ prodect }) {
  return (
    <div className="hover:cursor-pointer hover:animate-background rounded-xl bg-gradient-to-r from-primary via-blue-500 to-green-500 p-0.5 shadow-md transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <Image
            width={200}
            height={200}
            alt=""
            src={prodect?.attributes?.banner.data.attributes.url}
            className="h-56 w-full object-cover"
          />

        <div className="p-4 sm:p-6">
            <h1 className="text-[27px] font-semibold text-primary">
              {prodect?.attributes?.title}
            </h1>

            <p className="mt-2 mb-2 font-light text-[17] text-sm/relaxed text-gray-400 line-clamp-2">
              {prodect?.attributes?.description[0].children[0].text}
            </p>

            <h4 className="text-black font-semibold flex">
              {prodect?.attributes?.category}
            </h4>
            <div className="flex justify-between">
              <Link
              href={`/ProdectDetails/${prodect?.id}`}
              className=" group mt-4 inline-flex items-center gap-1 text-md font-medium text-textCol hover:text-primary transition-all duration-500"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all ms-1 group-hover:ms-2 rtl:rotate-180 duration-500"
              >
               <TiArrowRightThick />
              </span>
              
            </Link>
            <h3 className="mt-5 text-teal-600 font-semibold"><span className="text-[#000000ce]">Preice :</span> {prodect?.attributes?.price} $</h3>

            </div>

          </div>


        </article>
    </div>
  );
}

export default Card;
