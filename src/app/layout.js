"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { CartContext } from "./_CartsContext/CartContext";
import { useState } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

// export const metadata = {
//   title: {
//     default: "Ecommerce Y - S",
//     template: "%s | Y - S",
//   },
//   description: "Ecommerce Site Management",
// };

export default function RootLayout({ children }) {
  const [carts, setCarts] = useState([]);

  const contextValue = { carts, setCarts };
  return (
    <ClerkProvider>
      <CartContext.Provider value={contextValue}>
        <html lang="en">
          <body className={roboto.className}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
