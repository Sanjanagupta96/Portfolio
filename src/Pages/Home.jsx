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
        className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-3"
      >
        {profile.heroTagline}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
      >
        Hi, I&apos;m{" "}
        <span className="text-blue-400">{profile.name}</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl sm:text-3xl text-blue-400 font-semibold mb-4 mt-4 min-h-[2.5rem]"
      >
        <TypeAnimation sequence={typewriterSequence} speed={50} repeat={Infinity} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 mb-6 max-w-lg text-lg leading-relaxed"
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
          className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition"
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
          className="border border-gray-500 px-6 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          View Projects
        </button>
      </motion.div>
    </section>
  );
}

export default Home;
