import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="max-w-4xl w-fit mx-auto flex gap-8 text-center">
        <Link
          href="/"
          className="hover:text-blue-200 hover:underline underline-offset-8 transition"
        >
          Home
        </Link>
        <Link
          href="/members"
          className="hover:text-blue-200 hover:underline underline-offset-8 transition"
        >
          Members
        </Link>
        <Link
          href="/about"
          className="hover:text-blue-200 hover:underline underline-offset-8 transition"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
