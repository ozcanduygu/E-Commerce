import React from "react";
import { Clock, BarChart3, ChevronRight} from "lucide-react";


export default function BlogCard({ post }) {
  return (
    <div className="flex-1 max-w-sm bg-white shadow-sm overflow-hidden font-montserrat">
      
      {/* GÖRSEL */}
      <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />

      <div className="p-6 space-y-4">

        {/* TAGS */}
        <div className="flex gap-3 font-normal">
          {post.tags.map((tag, index) => (
            <a 
              key={index}
              href="#"
              className={`text-sm font-semibold ${
                tag === "Google" ? "text-[#8EC2F2]" : "text-[#737373]"
              }`}
            >
              {tag}
            </a>
          ))}
        </div>

        {/* BAŞLIK */}
        <h4 className="text-[#252B42] text-xl font-bold">
          {post.title}
        </h4>

        {/* AÇIKLAMA */}
        <p className="text-[#737373] text-sm leading-relaxed">
          {post.description}
        </p>

        {/* TARİH + COMMENT */}
        <div className="flex justify-between text-[#737373] text-sm mt-4">
          <span className="flex items-center gap-2">
            <Clock size={16} color="#23A6F0" /> {post.date}
          </span>

          <span className="flex items-center gap-2">
            <BarChart3 size={16} color="#23856D"/> {post.comments} comments
          </span>
        </div>

        {/* LEARN MORE */}
          {/* LEARN MORE */}
<div className="flex flex-row items-center mt-4">
  <a 
    href="#" 
    className="text-[#737373] font-semibold no-underline"
  >
    Learn More
  </a>

  <ChevronRight size={18} color="#23A6F0" />
</div>



      </div>
    </div>
  );
}
