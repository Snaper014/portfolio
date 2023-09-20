"use client";
import React from "react";
import { useRouter } from 'next/navigation';

export const NewLink = () => {
    const router = useRouter();
  return (
    <button onClick={() => router.push("https://www.chess.com/fr")}
    className="w-[30%] self-center mt-[10px] text-center text-[24px] px-4 py-2 rounded-[40px] bg-black tracking-wide font-[500] text-white mx-2"
    >
      Lien vers le site
    </button>
  );
};
