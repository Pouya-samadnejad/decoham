import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function HamburgerButton({ click }) {
  return (
    <>
      <button
        className="p-2 border-2 hover:bg-[#ffcc00] transition-all z-40 lg:hidden"
        onClick={click}
      >
        <RxHamburgerMenu className="text-xl text-white hover:text-black transition-all" />
      </button>
    </>
  );
}

export default HamburgerButton;
