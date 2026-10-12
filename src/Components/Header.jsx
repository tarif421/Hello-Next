"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "../Components/NavLink";

const Header = () => {
  const pathname = usePathname();

  // ড্যাশবোর্ডের ভেতরে থাকলে লেআউটে হেডার হাইড থাকবে
  if (pathname.startsWith("/dashboard")) return null;

  return (
    <header className="px-4 py-3 border-b border-gray-200 flex justify-center items-center shadow-sm">
      <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-base sm:text-lg font-semibold">
        {/* <NavLink href="/home" >Home</NavLink> */}
        <NavLink href="/about">About</NavLink>
        <NavLink href="/teams">Teams</NavLink>
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/stories">Stories</NavLink>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/register">Register</NavLink>
      </nav>
    </header>
  );
};

export default Header;