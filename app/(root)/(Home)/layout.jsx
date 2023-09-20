import * as React from "react";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main
        id="bgColor"
        className="w-full z-[-1] flex flex-col relative top-[10vh] h-full"
      >
        {children}
        <Contact />
      </main>
    </>
  );
}
