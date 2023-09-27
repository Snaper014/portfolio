import React from "react";
import Image from "next/image";
import PhotoProfil from "../../../assets/NewPictureProfil.png";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";
import { ContactButton } from "@/components/Buttons";

function Page() {
  return (
    <>
      <section
        id="Home"
        className="bg-Home w-full lg:h-[90vh] mb-14 flex flex-row flex-nowrap max-lg:flex-col max-lg:flex-wrap"
      >
        <div className="w-[50%] h-full flex items-center justify-center max-lg:w-full max-lg:mb-[25px]">
          <Image
            src={PhotoProfil}
            alt="Photo de profil"
            sizes="100vw"
            className="w-[45%] h-[auto] rounded-full"
            priority
          />
        </div>
        <div className="w-[50%] max-lg:w-full max-lg:items-center h-full flex flex-col items-start justify-center text-[35px] font-[500] font-sans text-white">
          <h2 className="text-[0.6em] font-[500] text-black">Hi, my name is</h2>
          <h1 className="text-[2em] max-md:text-[1em] font-[700] max-md:text-center">
            VICO NELSON
          </h1>
          <h1 className="text-[2em] max-md:text-[1em] font-[700] max-md:text-center">
            Front End developer
          </h1>
          <h2 className="text-[2em] max-md:text-[1em] font-[700] max-md:text-center">
            REACT
          </h2>
          <ContactButton />
        </div>
      </section>
      <Project />
      <Skill />
      <Contact />
    </>
  );
}

export default Page;
