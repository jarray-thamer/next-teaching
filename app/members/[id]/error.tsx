"use client";
import React, { useEffect } from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-red-200 text-center">
      <div className="text-5xl mb-4">😬</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Something went wrong
      </h2>
      <p className="text-gray-600 mb-6">
        We couldn't load this member's profile. This might be a temporary
        problem.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md hover:bg-blue-500 transition"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
