import { motion } from "framer-motion";
import { profile } from "../data/profile";

function About() {
  const { education } = profile;

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
      </div>
    </section>
  );
}

export default About;
