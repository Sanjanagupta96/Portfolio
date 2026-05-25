import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { profile } from "../data/profile";

function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-2"
      >
        Featured <span className="text-blue-400">Projects</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-slate-400 mb-10 max-w-2xl"
      >
        Selected work showcasing full-stack development and problem-solving skills.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {profile.projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/40 transition group"
          >
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
              {project.title}
            </h3>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-slate-900 text-blue-400"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              {project.github && !project.github.includes("YOUR_USERNAME") && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
