"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  console.log(router);

  const handleClick = () => {
    const password = prompt("Please enter the password:");
    if (password === "1234") {
      router.push("/dashboard");
    } else {
      alert("Access denied!");
    }
  };
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded py-15 text-center">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded py-15 text-center ">
        Banner is Here
      </h2>

      <button
        onClick={handleClick}
        className="bg-blue-500 my-4   text-white px-4 py-2 cursor-pointer hover:bg-blue-600 rounded"
      >
        Get Started
      </button>
    </div>
  );
};

export default Banner;
