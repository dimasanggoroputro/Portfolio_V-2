import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-Putih p-5 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center md:px-8 px-1">
        {/* Logo */}
        <NavbarLogo />

        {/* Link Navigasi (Tetap Horizontal di Laptop) */}
        <div className="hidden md:flex">
          <NavbarLink menuOpen={true} />
        </div>

        {/* Tombol menu untuk layar kecil */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* NavbarLink hanya untuk tampilan HP */}
      <div className="md:hidden">
        <NavbarLink menuOpen={menuOpen} />
      </div>
    </nav>
  );
};

export default NavbarMain;
