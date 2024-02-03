import React from "react";

export default function Footer() {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <footer className="   py-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
       
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 text-center ">
          © {getYear()} RodriguezBBQ. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
