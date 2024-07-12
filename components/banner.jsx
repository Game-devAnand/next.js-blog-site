import React from "react";

function HomeBanner() {
  return (
    <div className="flex flex-col min-w-full items-center justify-center relative mb-5">
      <div className="flex bg-violet-500 rounded-xl p-10 m-30 w-full content-center justify-center z-0 relative">
        <h3 className="text-4xl text-white font-bold font-sans">Blog</h3>
      </div>
      <div className="flex absolute top-24 bg-white rounded-xl w-80 p-2 items-center content-center justify-center shadow-lg z-10">
        <h4 className="text-xl text-gray-500 font-bold font-sans ">
          {new Date().toLocaleDateString()}
        </h4>
      </div>
    </div>
  );
}

export default HomeBanner;
