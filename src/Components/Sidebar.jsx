import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/profile";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },

  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "internship", label: "Internship" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Avatar({ size = "lg" }) {
  const sizes = {
    sm: "w-12 h-12 text-lg",
    lg: "w-28 h-28 text-3xl",
  };

  if (profile.profileImage) {
    return (
      <img
        src={profile.profileImage}
        alt={profile.name}
        className={`${sizes[size]} rounded-full mx-auto border-4 border-blue-500 shadow-lg object-cover`}
      />
    );
  }

  return (
    <div
      className={`${sizes[size]} rounded-full border-4 border-blue-500 shadow-lg bg-slate-800 flex items-center justify-center font-bold text-blue-400 ${size === "lg" ? "mx-auto" : ""}`}
    >
      {profile.initials}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-center gap-5 text-xl">
      {profile.social.github && (
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
      )}
      {profile.social.linkedin && (
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
      )}
      <a
        href={`mailto:${profile.contact.email}`}
        className="hover:text-blue-400 transition"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}

function NavLinks({ onNavigate }) {
  return (
    <ul className="flex flex-col gap-4 text-lg">
      {NAV_ITEMS.map(({ id, label }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => {
              scrollToSection(id);
              onNavigate?.();
            }}
            className="w-full text-left text-slate-300 hover:text-blue-400 transition cursor-pointer"
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0f172a] border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar size="sm" />
          <div>
            <p className="text-sm font-semibold text-white">{profile.name}</p>
            <p className="text-[11px] text-slate-400">{profile.title}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-white hover:bg-slate-800 transition"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 z-40 overflow-auto bg-[#0f172a] px-4 py-6 md:hidden">
          <NavLinks onNavigate={() => setMenuOpen(false)} />
          <div className="mt-8">
            <SocialLinks />
          </div>
          <a
            href={profile.resumeFile}
            download
            className="mt-6 block text-center bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
        </div>
      )}

      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-[#0f172a] text-white flex-col justify-between py-8 px-6 shadow-2xl z-50">
        <div>
          <div className="text-center">
            <Avatar size="lg" />
            <h2 className="mt-4 text-xl font-semibold">{profile.name}</h2>
            <p className="text-sm text-gray-400">{profile.title}</p>
          </div>
          <div className="mt-10">
            <NavLinks />
          </div>
        </div>

        <div className="text-center space-y-4">
          <SocialLinks />
          <a
            href={profile.resumeFile}
            download
            className="block bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition text-sm"
          >
            Download Resume
          </a>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
