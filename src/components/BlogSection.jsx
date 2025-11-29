import React from "react";
import BlogCard from "./BlogCard";
import { blogData } from "../data/blogData";

export default function BlogSection() {
  return (
    <div className="w-full bg-[#FFFFFF] h-auto py-20">
      <div className="max-w-[1420px] mx-auto px-4">

        {/* ÜST METİN */}
        <div className="text-center max-w-2xl mx-auto mb-16 font-montserrat">
          <h6 className="text-[#23A6F0] text-sm font-bold">Practice Advice</h6>
          
          <h2 className="text-[#252B42] text-3xl font-bold mt-2">
            Featured Posts
          </h2>

          <p className="text-[#737373] mt-4 leading-relaxed">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* CARD GRID */}
        <div className="flex gap-8 justify-center">
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </div>
  );
}
