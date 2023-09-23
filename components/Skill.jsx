"use client";
import React from "react";
import { techs } from "./techs";

function Skill() {
  return (
    <section id="Skills" className="w-full mb-14 flex flex-col items-center">
      <h1 className="text-[#10BD99] text-[48px] text-[700] self-center mb-4">
        Skills
      </h1>
      <div
        className="w-full grid grid-cols-2 sm:w-[85%] sm:grid-cols-3 gap-8 
            text-center py-8 px-12 sm:px-0"
      >
        {techs.map((element, index) => (
          <div
            key={index}
            className={`shadow-md hover:scale-105 duration-500 py-2 
                    rounded-lg ${element.ombre} flex flex-col items-center `}
          >
            {element.logo}
            <p className="mt-4 text-[500] text-[1em]">{element.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
