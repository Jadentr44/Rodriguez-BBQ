import React from "react";
import Cart from "./icons/Cart";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-white md:fixed sticky  top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl flex justify-between items-center px-4 py-2 ">
        <Link href="/">
          <img className="sm:h-16 h-12" src="logo.png" alt="" />
        </Link>
        <ul className="font-medium flex flex-row items-center  md:text-2xl text-xl gap-3 md:gap-6 ">
          <li>
            <Link
              href="/menu"
              className="block py-2  text-red-600 "
              aria-current="page"
            >
              <h2>Menu</h2>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2   " aria-current="page">
              <h2>Catering</h2>
            </Link>
          </li>
          <li>
            <Link href="/cart" className="block py-2   " aria-current="page">
              <Cart className="md:w-8 w-6" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
