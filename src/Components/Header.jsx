import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-center  items-center flex-wrap ">
   

      <nav className="flex space-x-8 text-lg font-semibold  items-center  ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/register">Teams</Link>
        <Link href="/Tutorials">Tutorials</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/login">login</Link>
        <Link href="/register">register</Link>
      </nav>
    </header>
  );
};

export default Header;
