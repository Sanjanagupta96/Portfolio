import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { profile } from "../data/profile";

function Home() {
  const typewriterSequence = profile.typewriterRoles.flatMap((role) => [
    role,
    1500,
  ]);
  

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-2 sm:px-4"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-neutral-400 mb-3"
      >
        {profile.heroTagline}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
      >
        Hi, I&apos;m{" "}
        <span className="text-white border-b-2 border-white pb-1">{profile.name}</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl sm:text-3xl text-neutral-300 font-bold mb-4 mt-4 min-h-[2.5rem]"
      >
        <TypeAnimation sequence={typewriterSequence} speed={50} repeat={Infinity} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-neutral-400 mb-6 max-w-lg text-lg leading-relaxed"
      >
        {profile.heroBio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        <a
          href={profile.resumeFile}
          download
          className="bg-white text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-neutral-200 transition shadow-sm"
        >
          Download Resume
        </a>
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="border border-neutral-800 bg-neutral-900/60 text-neutral-200 font-medium px-6 py-2.5 rounded-lg hover:bg-neutral-800 hover:text-white transition cursor-pointer"
        >
          View Projects
        </button>
      </motion.div>
    </section>
  );
}

export default Home;
