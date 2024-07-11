`use client`;
import { Link } from "next/link";
import Image from "next/image";
import React from "react";

function BlogCardTile() {
  return (
    <div>
      <div className="p-4 shadow-md rounded-lg hover:shadow-lg/2 transition duration-300 ease-in-out transform hover:-translate-y-1">
        <Image
          className="w-full h-48 rounded-t-lg object-cover"
          src="/images/data.jpg"
          alt="data.title"
          width={100}
          height={100}
        />
        <div className="mt-4 px-2">
          <h3 className="text-lg font-medium text-gray-900 hover:underline">
            {"data.title"}
          </h3>
          <p className="text-gray-600 line-clamp-2">{"data.subheading"}</p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span className="mr-2">{"data.name"}</span>
            <span> - </span>
            <span>{"data.desc"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCardTile;
