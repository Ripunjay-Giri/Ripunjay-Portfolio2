import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/10 dark:bg-grid-white/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />

      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div 
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
              filter === "all" 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                : "bg-background border border-input hover:border-primary/50"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
              filter === "web" 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                : "bg-background border border-input hover:border-primary/50"
            }`}
          >
            Web Development
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card rounded-xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group-hover:translate-x-1 duration-300"
                >
                  View Project 
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12H4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}