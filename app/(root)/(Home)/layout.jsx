import * as React from "react";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main
        id="bgColor"
        className="w-full z-[0] flex flex-col relative top-[10vh] h-full"
      >
        {children}
      </main>
    </>
  );
}
