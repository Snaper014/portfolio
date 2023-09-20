import * as React from "react";
import Buttons from "./Buttons";

function Navbar() {
  return (
    <nav
      id="bgColor"
      className="w-full fixed shadow-md z-50 top-0 h-[10vh] px-2 flex items-center justify-between border-1 border-solid border-transparent"
    >
      <h1 className="text-[35px] font-[400]  text-white tracking-wider">VN</h1>
      <Buttons />
    </nav>
  );
}

export default Navbar;