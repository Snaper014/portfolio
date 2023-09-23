import * as React from "react";
import { Buttons } from "./Buttons";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-Color w-full fixed shadow-sm z-20 top-0 h-[10vh] px-2 flex items-center justify-between border-1 border-solid border-transparent">
      <Link href="/">
        <h1 className="text-[35px] font-[400]  text-white tracking-wider">VN</h1>
      </Link>
      <Buttons />
    </nav>
  );
}

export default Navbar;
