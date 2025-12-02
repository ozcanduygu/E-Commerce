import React from "react";
import { Clock, BarChart3, ChevronRight } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white shadow-sm overflow-hidden font-montserrat rounded-md">

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 md:h-56 object-cover"
      />

      <div className="p-5 space-y-4">

        <div className="flex gap-3 flex-wrap">
          {post.tags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className={`text-xs md:text-sm font-semibold ${
                tag === "Google" ? "text-[#8EC2F2]" : "text-[#737373]"
              }`}
            >
              {tag}
            </a>
          ))}
        </div>

        <h4 className="text-[#252B42] text-lg md:text-xl font-bold">
          {post.title}
        </h4>

        <p className="text-[#737373] text-xs md:text-sm leading-relaxed">
          {post.description}
        </p>

        <div className="flex justify-between text-[#737373] text-xs md:text-sm mt-4">
          <span className="flex items-center gap-2">
            <Clock size={16} color="#23A6F0" /> {post.date}
          </span>

          <span className="flex items-center gap-2">
            <BarChart3 size={16} color="#23856D" /> {post.comments} comments
          </span>
        </div>

        <div className="flex flex-row items-center mt-4 hover:opacity-70 cursor-pointer">
          <span className="text-[#737373] font-semibold text-sm">
            Learn More
          </span>
          <ChevronRight size={18} color="#23A6F0" />
        </div>

      </div>
    </div>
  );
}
