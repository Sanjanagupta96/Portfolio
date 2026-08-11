import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

function About() {
  const { education, social } = profile; // Clean array destructuring

  return (
    <section id="about" className="py-20 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold text-white mb-2"
      >
        About <span className="text-neutral-400">Me</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-neutral-400 mb-10 max-w-2xl"
      >
        {profile.aboutIntro}
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side: Bio Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-base sm:text-lg leading-relaxed text-neutral-300"
        >
          {profile.aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Right Side: Cards Container */}
        <div className="space-y-6">
          {/* Academic Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-white" />
              Academic Details
            </h3>
            <div className="space-y-4 text-neutral-300">
              <div>
                <p className="font-semibold text-white">{education.degree}</p>
                <p className="text-sm text-neutral-400 mt-1">CGPA: {education.cgpa}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                  Relevant Subjects
                </p>
                <p className="text-neutral-300 text-sm">{education.subjects}</p>
              </div>
            </div>
          </motion.div>

          {/* Profiles & Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-white" />
              Coding & Social Profiles
            </h3>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              {/* GitHub */}
              {social.github && (
                <a href={social.github} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-3 p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 group">
                  <FaGithub size={20} className="group-hover:scale-110 transition-transform text-white" />
                  <span className="font-medium">GitHub</span>
                </a>
              )}

              {/* LinkedIn */}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-3 p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 group">
                  <FaLinkedin size={20} className="group-hover:scale-110 transition-transform text-white" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              )}

              {/* LeetCode */}
              {social.Leetcode && (
                <a href={social.Leetcode} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-3 p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 group">
                  <SiLeetcode size={20} className="group-hover:scale-110 transition-transform text-white" />
                  <span className="font-medium">LeetCode</span>
                </a>
              )}

              {/* GeeksforGeeks */}
              {social.GeeksforGeeks && (
                <a href={social.GeeksforGeeks} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-3 p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 group">
                  <SiGeeksforgeeks size={20} className="group-hover:scale-110 transition-transform text-white" />
                  <span className="font-medium">GeeksforGeeks</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
