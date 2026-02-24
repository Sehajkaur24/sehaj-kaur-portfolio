import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


interface ProjectProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tech?: string[];
  // category: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  tech,
}: ProjectProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md overflow-hidden 
hover:shadow-2xl hover:-translate-y-3 hover:scale-105 
transition-all duration-500 ease-in-out">

      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        <p className="text-sm text-[#6b5c4f] mb-4">
          {description}
        </p>


   {/* Tech Tags */}
{tech && (
  <div className="flex flex-wrap gap-2 mb-4">
    {tech.map((item, index) => (
      <span
        key={index}
        className="text-xs px-3 py-1 bg-[#ede7df] border border-[#d8cfc3] rounded-full"
      >
        {item}
      </span>
    ))}
  </div>
)}

       {/* Links */}
<div className="flex gap-6 text-sm font-medium items-center">
  {github && (
    <Link
      href={github}
      target="_blank"
      className="hover:text-[#8b6f5c] transition"
    >
      GitHub
    </Link>
  )}

  {demo && (
    <Link
      href={demo}
      target="_blank"
      className="hover:text-[#8b6f5c] transition"
    >
      Live Demo
    </Link>
  )}

  <button
    onClick={() => setOpen(true)}
    className="hover:text-[#8b6f5c] transition"
  >
    View Details
  </button>
</div>

{/* Premium Modal */}
{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">

    {/* Dark Blur Background */}
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    />

    {/* Modal Card */}
    <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 z-50 animate-fadeIn">

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <p className="text-gray-600 mb-6">{description}</p>

      {tech && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-[#ede6dc] rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-6">
        {github && (
          <Link
            href={github}
            target="_blank"
            className="px-4 py-2 bg-black text-white rounded-full hover:opacity-80"
          >
            GitHub
          </Link>
        )}

        {demo && (
          <Link
            href={demo}
            target="_blank"
            className="px-4 py-2 border rounded-full hover:bg-black hover:text-white"
          >
            Live Demo
          </Link>
        )}
      </div>
    </div>
  </div>
)}
          
        </div>
        
      </div>

  );
}