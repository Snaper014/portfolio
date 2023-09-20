import React from "react";
import Image from "next/image";
import PictureYoutube from "../public/image-youtube.png";

function Project() {
  return (
    <section className="h-[auto] max-lg:h-full w-full flex flex-col mt-2">
      <div className="w-[full] h-[33.33%] mb-[30px] flex flex-row flex-nowrap max-lg:flex-col">
        <div className="w-[40%] max-lg:w-full h-full flex items-center justify-center mb-3">
          <Image
            src={PictureYoutube}
            alt="picture youtube clone"
            sizes="100vw"
            className="w-[85%] h-[auto] rounded-md"
            priority
          />
        </div>
        <div className="w-[60%] max-lg:w-full h-full flex flex-col">
          <h2 className="w-full text-[22px] mb-2 font-[700] text-white text-center">
            Youtube Clone
          </h2>
          <p className="w-full text-[18px] font-[700]">
            This project is a clone of the popular video-sharing platform,
            YouTube. It allows users to view and search for videos, watch them,
            and enjoy a similar experience to the actual YouTube website. The
            application is built with React and uses modern web technologies to
            provide a smooth and responsive user interface. It fetches video
            data from a sample API and displays it in a familiar layout,
            including video thumbnails, titles, and descriptions.
          </p>
          <a
            href="https://www.chess.com/fr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '30%' }}
            className="self-center mt-[10px] text-center text-[24px] px-4 py-2 rounded-[40px] bg-black tracking-wide font-[500] text-white mx-2"
          >
            Lien vers le site
          </a>
        </div>
      </div>
      <div className="w-[full] h-[33.33%] mb-[30px] flex flex-row flex-nowrap max-lg:flex-col">
        <div className="w-[40%] max-lg:w-full h-full flex items-center justify-center mb-3">
          <Image
            src={PictureYoutube}
            alt="picture youtube clone"
            sizes="100vw"
            className="w-[85%] h-[auto] rounded-md"
            priority
          />
        </div>
        <div className="w-[60%] max-lg:w-full h-full flex flex-col">
          <h2 className="w-full text-[22px] mb-2 font-[700] text-white text-center">
            Youtube Clone
          </h2>
          <p className="w-full text-[18px] font-[700]">
            This project is a clone of the popular video-sharing platform,
            YouTube. It allows users to view and search for videos, watch them,
            and enjoy a similar experience to the actual YouTube website. The
            application is built with React and uses modern web technologies to
            provide a smooth and responsive user interface. It fetches video
            data from a sample API and displays it in a familiar layout,
            including video thumbnails, titles, and descriptions.
          </p>
        </div>
      </div>
      <div className="w-[full] h-[33.33%] mb-[30px] flex flex-row flex-nowrap max-lg:flex-col">
        <div className="w-[40%] max-lg:w-full h-full flex items-center justify-center mb-3">
          <Image
            src={PictureYoutube}
            alt="picture youtube clone"
            sizes="100vw"
            className="w-[85%] h-[auto] rounded-md"
            priority
          />
        </div>
        <div className="w-[60%] max-lg:w-full h-full flex flex-col">
          <h2 className="w-full text-[22px] mb-2 font-[700] text-white text-center">
            Youtube Clone
          </h2>
          <p className="w-full text-[18px] font-[700]">
            This project is a clone of the popular video-sharing platform,
            YouTube. It allows users to view and search for videos, watch them,
            and enjoy a similar experience to the actual YouTube website. The
            application is built with React and uses modern web technologies to
            provide a smooth and responsive user interface. It fetches video
            data from a sample API and displays it in a familiar layout,
            including video thumbnails, titles, and descriptions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project;
