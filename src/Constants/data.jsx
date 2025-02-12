import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

export const socialLinks = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com",
    icon: (
      <TbBrandGithubFilled className="text-2xl text-neutral-400 hover:text-white" />
    ),
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <FaLinkedinIn className="text-2xl text-neutral-400 hover:text-white" />
    ),
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaXTwitter className="text-2xl text-neutral-400 hover:text-white" />,
  },

  {
    id: 4,
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <AiFillInstagram className="text-2xl text-neutral-400 hover:text-white" />
    ),
  },
];
