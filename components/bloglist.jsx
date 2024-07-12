import React from "react";
import BlogCardTile from "./card";

export default function Bloglist() {
  return (
    <div className="p-2 flex flex-wrap justify-evenly">
      <BlogCardTile num={0} />
      <BlogCardTile num={1} />
      <BlogCardTile num={2} />
      <BlogCardTile num={3} />
      <BlogCardTile num={4} />
    </div>
  );
}
