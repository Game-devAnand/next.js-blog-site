import React from "react";

export default function SimpleNavClient() {
  return (
    <div className="flex flex-col min-w-full items-center justify-center relative mt-5 mb-5">
      <p className="p-3 mb-3">Trending Today</p>
      <nav>
        <ul className="flex flex-row items-center justify-center w-full">
          <li className="mr-5 p-1 w-20 flex justify-center rounded-3xl border-solid border-2 border-black">
            Game
          </li>
          <li className="mr-5 p-1 w-20 flex justify-center rounded-3xl border-solid border-2 border-black">
            NFT
          </li>
          <li className="mr-5 p-1 w-20 flex justify-center rounded-3xl border-solid border-2 border-black">
            Tech
          </li>
          
        </ul>
      </nav>
    </div>
  );
}
