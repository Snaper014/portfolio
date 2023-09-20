"use client";
import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Buttons() {
  const [select, setSelect] = React.useState("Home");
  const [WidthScreen, setWidthScreen] = React.useState(750);
  const Buttons = ["Home", "Projects", "Skills", "Contact"];

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
              onClick={() => setSelect(name)}
              className={`text-[24px] px-3 py-1 rounded-[40px] ${
                select === name ? "bg-black" : ""
              } tracking-wide font-[500] text-white mx-2 text-center`}
            >
              {name}
            </button>
          ))}
        </div>
      ) : (
        <AiOutlineMenu color="white" fontSize={28} />
      )}
    </>
  );
}

export default Buttons;
