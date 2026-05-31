import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../data/profile";

function Contact() {
  const { contact, name } = profile;

  const contactItems = [
    { icon: FaEnvelope, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: FaPhone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: FaMapMarkerAlt, label: "Location", value: contact.location },
  ];

  return (
    <section id="contact" className="py-20 scroll-mt-24 pb-32">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-2"
      >
        Contact <span className="text-blue-400">Me</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-slate-400 mb-10 max-w-2xl"
      >
        Have a project or opportunity? Send a message — I&apos;ll get back to you
        soon.
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                <Icon />
              </div>
              <div>
                <p className="text-sm text-slate-400">{label}</p>
                {href ? (
                  <a href={href} className="text-white hover:text-blue-400 transition">
                    {value}
                  </a>
                ) : (
                  <p className="text-white">{value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition"
          /> */}
          {/* <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition"
          /> */}
          {/* <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition resize-none"
          /> */}
          {/* <button
            type="submit"
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
          >
            Send Message
          </button> */}
        </motion.form>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} {name}. Built with React & Tailwind CSS.
      </footer>
    </section>
  );
}

export default Contact;
