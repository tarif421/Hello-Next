import Link from "next/link";
import React from "react";

const NotFount404 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5">
      404 | Page Not Found
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default NotFount404;
