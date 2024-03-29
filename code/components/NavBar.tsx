"use client";

import { useState } from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Hamburger from "./Hamburger";
import MobileNav from "./MobileNav";



export type Page = {
  href: string;
  title: string;
  subpages?: Page[];
};
  
const pages: Page[] = [
  { href: "/", title: "Naslovnica" },
  { href: "/schedule", title: "Raspored" },
  { href: "/table", title: "Tablica" },
  { href: "/competition", title: "Natjecanje"},
];
  
const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="container flex items-center justify-between mx-auto mb-1">
      <Logo />
      <MainNav pages={pages} />
      <Hamburger open={open} clickHandler={setOpen} />
      <MobileNav open={open} clickHandler={setOpen} pages={pages} />
    </div>
  );
}

export default NavBar;
