"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { postData } from "@/data/temp";

export default function BlogDetailpage({ params }) {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log("id is : ");
  // console.log(id);
  const post = postData[params.id];
  return (
    <div>
      <div className="container mx-auto px-4 py-8 mb-20">
        <article className="bg-white rounded-lg p-8 shadow-md">
          <Image
            className="w-full h-64 rounded-lg object-cover mb-4"
            src={post.img}
            alt={post.title}
            width={1280}
            height={720}
          />
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center mb-4 text-gray-500">
            <span className="mr-2">By: {post.name}</span>
            <span>Published on: {post.date}</span>
            <span className="ml-4 text-gray-700">Tag: {post.tag}</span>
          </div>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.desc }}
          />{" "}
        </article>
      </div>
    </div>
  );
}
