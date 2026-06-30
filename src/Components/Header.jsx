import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap ">
      <h2 className="text-lg font-semibold">Dev-Story</h2>

      <nav className="flex gap-4 text-lg font-semibold  items-center  flex-wrap">
        <Link href="/about">About</Link>
        <Link href="/login">login</Link>
        <Link href="/register">Teams</Link>
        <Link href="/Tutorials">Tutorials</Link>
      </nav>
    </header>
  );
};

export default Header;
