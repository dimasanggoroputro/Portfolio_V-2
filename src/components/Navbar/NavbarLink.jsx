import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "Home", section: "home" },
  { link: "About", section: "about" },
  { link: "Projects", section: "project" },
  { link: "Contact", section: "contact" },
];

const NavbarLink = ({ menuOpen }) => {
  return (
    <ul
      className={`md:flex md:gap-4 md:static md:flex-row absolute top-full left-0 w-full bg-Putih/90 shadow-lg pb-2 flex-col items-center transition-all duration-500 ease-in-out 
      ${
        menuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 hidden"
      } 
      md:flex md:bg-transparent md:shadow-none md:py-0`}
    >
      {links.map((link, index) => (
        <li key={index} className="text-center md:text-left w-full md:w-auto">
          <Link
            to={link.section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70} // Agar tidak tertutup navbar
            className="block md:p-0 p-2 hover:text-Hiaju transition-all duration-500 md:inline-block text-lg cursor-pointer"
          >
            {link.link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLink;
