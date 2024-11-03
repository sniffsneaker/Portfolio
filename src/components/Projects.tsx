import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "AI Chat Application",
      description: "An AI-powered chat application using OpenAI's GPT-3",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      tags: ["Next.js", "OpenAI", "TypeScript"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-500">Check out some of my recent work</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-500">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 hover:text-purple-700"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}