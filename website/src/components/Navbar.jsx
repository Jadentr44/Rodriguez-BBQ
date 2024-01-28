import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white md:fixed sticky  top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl flex justify-between items-center px-4 py-2 ">
        <img className="sm:h-16 h-12" src="logo.jpg" alt="" />
        <ul className="font-medium flex flex-row  md:text-xl text-base">
        <li>
          <a href="#" className="block py-2 px-3 text-red-600 " aria-current="page">Menu</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3  " aria-current="page">Catering</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3  " aria-current="page">Contact</a>
        </li>
        
      </ul>
      </div>
    </nav>
  );
}
