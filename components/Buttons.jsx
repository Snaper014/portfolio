"use client";
import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

export function Buttons() {
  const [select, setSelect] = React.useState("Home");
  const [WidthScreen, setWidthScreen] = React.useState(750);
  const [menu, setMenu] = React.useState(false);
  const Buttons = ["Home", "Projects", "Skills", "Contact"];

  const IsTranslate = () => {
    setMenu(!menu);
  };
  const scrollSection = (name) => {
    const section = document.getElementById(`${name}`);
    const hight = section?.getBoundingClientRect()?.top;
    window.scrollBy(0, hight);
  };

  React.useEffect(() => {
    setWidthScreen(window.innerWidth);
    const resize = () => setWidthScreen(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [WidthScreen]);

  return (
    <>
      {WidthScreen > 1024 ? (
        <div className="flex flex-row flex-nowrap">
          {Buttons.map((name, index) => (
            <button
              key={index}
              onClick={() => {
                setSelect(name);
                scrollSection(name);
              }}
              className={`text-[24px] px-3 py-1 rounded-[40px] ${
                select === name ? "bg-black" : ""
              } tracking-wide font-[500] text-white mx-2 text-center`}
            >
              {name}
            </button>
          ))}
        </div>
      ) : (
        <>
          <AiOutlineMenu
            color="white"
            className="cursor-pointer"
            onClick={() => IsTranslate()}
            fontSize={28}
          />
          <div
            className={`${
              menu ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 z-40 bg-white w-[30%] max-sm:w-[50%] h-[100vh] gap-5 flex flex-col items-start`}
          >
            <RxCross1
              onClick={() => IsTranslate()}
              className="mb-8 cursor-pointer"
              color="black"
              fontSize={40}
            />
            {Buttons.map((name, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelect(name);
                  scrollSection(name);
                  IsTranslate();
                }}
                className={`text-[24px] px-3 py-1 rounded-[40px] 
                  bg-black
              tracking-wide font-[500] text-white mx-2 text-center`}
              >
                {name}
              </button>
            ))}
          </div>
          {menu ? <div className="shadow-background"></div> : null}
        </>
      )}
    </>
  );
}
export const ContactButton = () => {
  const ScrollDown = () => window.scrollBy(0, 9000);
  return (
    <button
      onClick={ScrollDown}
      className="mt-[35px] text-center text-[24px] px-4 py-2 rounded-[40px] bg-black tracking-wide font-[500] text-white mx-2"
    >
      Contact me
    </button>
  );
};
