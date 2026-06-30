import Title from "@/src/Components/Title";
import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <div>
      <Title>i am about</Title>

      <nav className="flex gap-4 text-lg font-semibold  items-center  flex-wrap">
        <Link href="/about/contact">Contact</Link>
        <Link href="/about/teams">Teams</Link>
      </nav>
    </div>
  );
};

export default about;
