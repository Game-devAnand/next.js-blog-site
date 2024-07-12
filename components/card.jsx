"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { postData } from "../data/temp";

function BlogCardTile({ num }) {
  const post = postData[num];
  if (post) {
    return (
      <div className="pt-3 m-4">
        <div className="bg-white p-4 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
          <Image
            className="w-full h-36 rounded-lg object-cover overflow-hidden"
            src={post.img}
            alt={post.title}
            width={100}
            height={80}
          />
          <div className="flex rounded-lg bg-gray-200 mt-2 w-20 items-center justify-center">
            <p className="text-gray-600">Game</p>
          </div>
          <div className="mt-4 px-2">
            <h3 className="text-lg font-medium text-gray-900 hover:underline">
              {post.title}
            </h3>
            <p className="text-gray-500 line-clamp-2">{post.subheading}</p>
            <div className="flex flex-col items-start mt-2 text-sm text-gray-600">
              <span className="mr-2 font-bold">{post.name}</span>
              <span>{post.date}</span>
            </div>
            <div className="text-blue-600 flex items-end justify-end">
              <Link href={`/blog/${post.id}`}>
                <p>More</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // Handle missing data (optional)
    return <p>Loading...</p>;
  }
}

export default BlogCardTile;
