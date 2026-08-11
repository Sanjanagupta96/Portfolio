import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { profile } from "../data/profile";

function Internship() {
  return (
    <section id="internship" className="py-20 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold text-white mb-2"
      >
        Internships & <span className="text-neutral-400">Certificates</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-neutral-400 mb-10 max-w-2xl"
      >
        Professional experience and certifications that strengthened my practical
        skills.
      </motion.p>

      <div className="space-y-6">
        {profile.internships.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 flex gap-4 hover:border-neutral-700 transition"
          >
            <div className="w-12 h-12 shrink-0 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-white">
              <FaCertificate className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mt-1">
                {item.org} {item.period ? `· ${item.period}` : ""}
              </p>
              <p className="mt-3 text-neutral-300 text-sm leading-relaxed">
                {item.description}
              </p>
              {item.certificate && (
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-white font-semibold border-b border-neutral-500 pb-0.5 hover:text-neutral-400 transition text-sm"
                >
                  View Certificate →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Internship;
