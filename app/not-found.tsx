import Image from "next/image";
import React from "react";
import catStare from "./public/cat-stare.gif";
import Link from "next/link";

const notFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-6 py-24">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-8 h-64 w-64 overflow-hidden rounded-3xl shadow-2xl ring-8 ring-white">
          <Image
            src={catStare}
            fill
            alt="cat crying"
            unoptimized
            priority
            className="object-cover"
          />
        </div>
        <p className="text-base font-bold text-indigo-600 tracking-wider uppercase">
          Error 404
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 ">
          Where are we?
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 max-w-md">
          We can't seem to find the page you are looking for. but hey, at least
          you find this confused cat!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="text-sm rounded-full bg-indigo-600 px-8 py-3.5 font-semibold text-white shadow-md hover:bg-indigo-500 transition-all duration-200 hover:scale-105"
          >
            Take me home <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default notFound;
