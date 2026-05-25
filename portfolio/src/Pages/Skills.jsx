import { motion } from "framer-motion";
import { profile } from "../data/profile";

const colorMap = {
  purple: {
    icon: "bg-purple-500/20",
    title: "text-purple-400",
    tag: "text-purple-400",
  },
  blue: {
    icon: "bg-blue-500/20",
    title: "text-blue-400",
    tag: "text-blue-400",
  },
  cyan: {
    icon: "bg-cyan-500/20",
    title: "text-cyan-300",
    tag: "text-cyan-300",
  },
};

function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-2"
      >
        Technical <span className="text-blue-400">Skills</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-slate-400 mb-10 max-w-2xl"
      >
        Technologies and tools I use to design, build, and ship applications.
      </motion.p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {profile.skills.map((group, index) => {
          const c = colorMap[group.color];
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition"
            >
              <div
                className={`w-12 h-12 ${c.icon} rounded-full flex items-center justify-center mb-4`}
              >
                <span className={`text-xl font-semibold ${c.title}`}>◆</span>
              </div>
              <h3 className={`text-xl font-semibold ${c.title} mb-2`}>
                {group.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 ${c.tag}`}
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
