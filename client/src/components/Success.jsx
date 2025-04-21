import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h2 className="text-2xl font-medium mb-4">Verification Successful</h2>
        <p className="mb-6 text-gray-600">
          Your code has been successfully verified.
        </p>
        <Link
          to="/"
          className="rounded py-2 px-4 bg-indigo-900 text-white uppercase font-medium tracking-wider hover:bg-indigo-800"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
