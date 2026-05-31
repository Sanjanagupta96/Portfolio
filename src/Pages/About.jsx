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
        className="text-3xl sm:text-4xl font-bold mb-2"
      >
        About <span className="text-blue-400">Me</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-slate-400 mb-10 max-w-2xl"
      >
        {profile.aboutIntro}
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side: Bio Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-lg leading-relaxed text-slate-300"
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
            className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
              Academic Details
            </h3>
            <div className="space-y-4 text-slate-300">
              <div>
                <p className="font-semibold text-white">{education.degree}</p>
                <p className="text-sm text-slate-400 mt-1">CGPA: {education.cgpa}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-300 mb-2">
                  Relevant Subjects
                </p>
                <p className="text-slate-400">{education.subjects}</p>
              </div>
            </div>
          </motion.div>

          {/* 💡 NEW: Profiles & Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
              Coding & Social Profiles
            </h3>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              {/* GitHub */}
              {social.github && (
                <a href={social.github} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-300 group">
                  <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">GitHub</span>
                </a>
              )}

              {/* LinkedIn */}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50 text-slate-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all duration-300 group">
                  <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              )}

              {/* LeetCode */}
              {social.Leetcode && (
                <a href={social.Leetcode} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50 text-slate-300 hover:text-[#FFA116] hover:border-[#FFA116]/50 transition-all duration-300 group">
                  <SiLeetcode size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">LeetCode</span>
                </a>
              )}

              {/* GeeksforGeeks */}
              {social.GeeksforGeeks && (
                <a href={social.GeeksforGeeks} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50 text-slate-300 hover:text-[#2F8D46] hover:border-[#2F8D46]/50 transition-all duration-300 group">
                  <SiGeeksforgeeks size={20} className="group-hover:scale-110 transition-transform" />
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
