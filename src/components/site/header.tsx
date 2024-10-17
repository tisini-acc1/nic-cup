"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { RegisterButton } from "../buttons/register-button";

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        headerActive ? ` bg-sky-400` : `bg-transparent`
      } w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-4 fixed top-0 z-50`}
    >
      <Link href={"/"}>
        <Image
          src={"/Partially removed BG.png"}
          alt="NIC"
          width={80}
          height={80}
        />
      </Link>

      <div className="lg:flex justify-center items-center gap-8 hidden">
        {Menus.map((menu) => (
          <ScrollLink
            key={menu.id}
            to={menu.target}
            spy={true}
            offset={-100}
            smooth={true}
            activeClass="active"
            className="text-white uppercase font-semibold cursor-pointer rounded-lg hover:bg-lime-400 hover:text-black p-2 text-[15px]"
          >
            {menu.name}
          </ScrollLink>
        ))}

        <RegisterButton />
      </div>

      <div
        className="flex justify-center items-center lg:hidden mt-3"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-3xl text-white cursor-pointer" />
          ) : (
            <FaBars className="text-3xl text-white cursor-pointer" />
          )}
        </div>
      </div>

      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-red-400 absolute top-[72px] left-0 flex flex-col`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full p-4">
          {Menus.map((menu) => (
            <ScrollLink
              key={menu.id}
              to={menu.target}
              spy={true}
              offset={-100}
              smooth={true}
              activeClass="active"
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-lime-400 hover:text-black text-center w-full"
            >
              {menu.name}
            </ScrollLink>
          ))}
        </ul>

        <RegisterButton />
      </div>
    </nav>
  );
};

const Menus = [
  { id: 1, name: "home", target: "home", offset: -100 },
  { id: 2, name: "about", target: "about", offset: 0 },
  { id: 6, name: "faqs", target: "faqs", offset: 0 },
  { id: 4, name: "gallery", target: "gallery", offset: 0 },
  { id: 3, name: "partners", target: "partners", offset: 0 },
  { id: 5, name: "testimony", target: "testimony", offset: 0 },
  { id: 7, name: "contacts", target: "contacts", offset: 0 },
  // { id: 8, name: "resources", target: "/resources", offset: 0 },
];
