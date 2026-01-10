"use client";

import projects from "../utils/projects";
import ProjectCard from "./ui/ProjectCard";
import siteContent from "@/data/content";

export default function Projects() {
  const projectList = projects.projects;
  return (
    <section id="projects" className="py-20 bg-white hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {siteContent.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                link={project.link}
                technologies={project.technologies}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
