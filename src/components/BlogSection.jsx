import React from "react";
import BlogCard from "./BlogCard";
import { blogData } from "../data/blogData";

export default function BlogSection() {
  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1420px] mx-auto px-6">

        <div className="text-center max-w-xl mx-auto mb-14 font-montserrat">
          <h6 className="text-[#23A6F0] text-sm font-bold">Practice Advice</h6>

          <h2 className="text-[#252B42] text-2xl md:text-3xl font-bold mt-2">
            Featured Posts
          </h2>

          <p className="text-[#737373] mt-4 text-sm md:text-base leading-relaxed">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
