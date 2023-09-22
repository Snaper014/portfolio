import {
  DiHtml5,
  DiCss3,
  DiGithubBadge,
  DiJsBadge,
  DiReact,
} from "react-icons/di";
import { SiJest, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const techs = [
  {
    name: "HMTL",
    logo: <DiHtml5 color="darkorange" fontSize={80} />,
    alt: "logo HTML",
    ombre: "shadow-orange-500",
  },
  {
    name: "CSS",
    logo: <DiCss3 color="blue" fontSize={80} />,
    alt: "logo CSS",
    ombre: "shadow-blue-500",
  },
  {
    name: "Tailwind",
    logo: <SiTailwindcss color="#28C6DF" fontSize={80} />,
    alt: "logo Tailwind",
    ombre: "shadow-[#28C6DF]",
  },
  {
    name: "Javascript",
    logo: <DiJsBadge color="#F0E434 " fontSize={80} />,
    alt: "logo Javascript",
    ombre: "shadow-[#F0E434]",
  },
  {
    name: "React",
    logo: <DiReact color="#37BCE3 " fontSize={80} />,
    alt: "logo React",
    ombre: "shadow-[#37BCE3]",
  },
  {
    name: "Next JS",
    logo: <SiNextdotjs color="black" fontSize={80} />,
    alt: "logo NextJs",
    ombre: "shadow-[#000000]",
  },
  {
    name: "Jest",
    logo: <SiJest color="#9C4196 " fontSize={80} />,
    alt: "logo Jest",
    ombre: "shadow-[#9C4196]",
  },
  {
    name: "Github",
    logo: <DiGithubBadge color="black" fontSize={80} />,
    alt: "logo Github",
    ombre: "shadow-[#494D4E]",
  },
];
