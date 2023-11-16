import React from "react";
import Image from "next/image";
import { DiGithubBadge } from "react-icons/di";

export const CardProject = ({
  image,
  title,
  link,
  description,
  GithubLink,
}) => {
  return (
    <div className="w-[full] h-[33.33%] mb-[30px] flex flex-row flex-nowrap max-lg:h-[auto] max-lg:flex-col">
      <div className="w-[40%] max-[500px]:h-[40vh] max-lg:w-full h-full flex items-center justify-center mb-3">
        <Image
          src={image}
          alt="picture youtube clone"
          sizes="100vw"
          className="w-[85%] h-[auto] rounded-md max-[500px]:h-[40vh] max-sm:w-full"
          priority
        />
      </div>
      <div className="w-[60%] max-lg:w-full h-full flex flex-col">
        <h2 className="text-[#10BD99] w-full text-[22px] mb-2 font-[700] text-center">
          {title}
        </h2>
        <p className="w-full text-[18px] max-sm:0.80em font-[700]">
          {description}
        </p>
        <div className="w-full max-sm:mb-7 max-sm:flex-col flex items-center justify-evenly flex-row flex-nowrap">
          <a
            href={`${GithubLink}`}
            target="_blank"
            className="max-sm:mb-2"
            rel="noopener noreferrer"
            aria-label={`link towards the github ${GithubLink}`}
          >
            <DiGithubBadge color="black" fontSize={50} />
          </a>
          <a
            href={`${link}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`link towards the website ${title}`}
            className="w-[30%] max-sm:w-11/12 self-center mt-[10px] text-center text-[24px] px-4 py-2 rounded-[40px] bg-black tracking-wide font-[500] text-white mx-2"
          >
            Lien vers le site
          </a>
        </div>
      </div>
    </div>
  );
};
