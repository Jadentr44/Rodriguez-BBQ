import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white md:fixed sticky  top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl flex justify-between px-4 py-2 ">
        <img className="sm:h-16 h-12" src="logo.jpg" alt="" />
        <button>sign in</button>
      </div>
    </nav>
  );
}
