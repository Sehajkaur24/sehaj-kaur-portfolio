"use client";

import { useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import ProjectCard from "../../components/ProjectCard";
import Reveal from "../../components/Reveal";
import { projects } from "../../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const featuredProject = projects.find((p) => p.featured);

  return (
    <PageWrapper>
      <div className="min-h-screen px-8 py-32">

        {/* Featured Section */}
        {featuredProject && (
          <Reveal>
            <div className="mb-24 max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold mb-10 text-center">
                Featured Project
              </h2>
              <ProjectCard {...featuredProject} />
            </div>
          </Reveal>
        )}

        {/* Filter Buttons */}
        <Reveal>
          <div className="flex justify-center gap-6 mb-16">
            {["All"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  filter === category
                    ? "bg-[#5c4b3b] text-white scale-105"
                    : "border-[#5c4b3b] hover:bg-[#5c4b3b] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Reveal key={index}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}