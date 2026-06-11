import React from "react";

const Chahra = () => {
  return (
    <div className="max-w-2xl bg-white p-8 rounded-xl shadow-md border border-gray-200 animate-pulse">
      {/* Name */}
      <div className="h-10 w-2/3 bg-gray-200 rounded mb-3" />
      {/* Role */}
      <div className="h-6 w-1/2 bg-gray-200 rounded mb-4" />
      {/* info grid */}
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg mb-6border border-gray-200">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <div className="h-3 w-16 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
      {/* About  */}
      <div className="mb-6">
        <div className="h-3 w-20 bg-gray-200 rounded mb-3" />
        <div className="h-4 w-full bg-gray-200 rounded mb-2" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
      </div>
      {/* tech stack*/}

      <div>
        <div className="h-3 w-24 bg-gray-200 rounded mb-3" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-7 w-20 bg-gray-200 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chahra;
