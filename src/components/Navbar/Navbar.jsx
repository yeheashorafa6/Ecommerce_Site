"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import {  UserButton } from "@clerk/nextjs";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "./../../app/_CartsContext/CartContext";
import cartApis from "./../../utils/cartApis";
import Cart from "../Cart/Cart";

function Navbar() {
  // USE USER
  const { user } = useUser();
  // == USE USER ==

  // CONTEXT
  const { carts, setCarts } = useContext(CartContext);
  // == CONTEXT ==

  // STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);
  // == STATE ==

  // EFFECT
  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
  }, []);

  useEffect(() => {
    user && getCartItem();
  }, [user]);
  // == EFFECT ==


// FUNCTIONS
  const getCartItem = () => {
    cartApis
      .getUserCartItems(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        console.log("response from cart data ", res?.data?.data);
        res?.data?.data.forEach(citem =>{
          setCarts((oldCarts) =>[
            ...oldCarts,
            {
              id: citem?.id,
              products: citem?.attributes?.products?.data[0],
            }
          ])
        })
      });
  };

  // == FUNCTIONS ===

  // console.log(carts);

  return (
    !isLoggedIn && (
      <header className="bg-white shadow-md" id="header">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-teal-600" href="#">
            <span className="sr-only">Home</span>
            <Image src={"/logo.png"} width={100} height={100} alt="logo" />
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-black transition hover:text-gray-600 text-base"
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-black transition hover:text-gray-600 text-base"
                    href={"/Projects"}
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-black transition hover:text-gray-600 text-base"
                    href={"About"}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-black transition hover:text-gray-600 text-base"
                    href={"/Contact"}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600"
                    href="/sign-in"
                  >
                    Sign In
                  </a>

                  <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-textCol sm:block"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-5">
                  <h2 className="flex gap-2 cursor-pointer">
                    <FaCartShopping className="w-lg ml-5 mt-2 text-[20px]" onClick={()=>setIsCartOpen(!isCartOpen)}/>(
                    {carts?.length})
                  </h2>
                  <UserButton afterSignOutUrl="/" />
                  {isCartOpen && <Cart /> }
                </div>
              )}

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  );
}

export default Navbar;
