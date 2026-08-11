import { motion } from "framer-motion";
import { profile } from "../data/profile";

const monochromeStyle = {
  icon: "bg-neutral-900 border border-neutral-800 text-white",
  title: "text-white",
  tag: "bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-600 hover:text-white transition-colors duration-200",
};

function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold text-white mb-2"
      >
        Technical <span className="text-neutral-400">Skills</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-neutral-400 mb-10 max-w-2xl"
      >
        Technologies and tools I use to design, build, and ship applications.
      </motion.p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {profile.skills.map((group, index) => {
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition"
            >
              <div
                className={`w-10 h-10 ${monochromeStyle.icon} rounded-xl flex items-center justify-center mb-4`}
              >
                <span className="text-lg font-bold">◆</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {group.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-4">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs font-semibold px-3 py-1 rounded-md ${monochromeStyle.tag}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
