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
        className={`${sizes[size]} rounded-full mx-auto border-2 border-neutral-700 shadow-md object-cover`}
      />
    );
  }

  return (
    <div
      className={`${sizes[size]} rounded-full border-2 border-neutral-700 shadow-md bg-neutral-900 flex items-center justify-center font-bold text-white ${size === "lg" ? "mx-auto" : ""}`}
    >
      {profile.initials}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-center gap-5 text-xl text-neutral-400">
      {profile.social.github && (
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
      )}
      {profile.social.linkedin && (
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
      )}
      <a
        href={`mailto:${profile.contact.email}`}
        className="hover:text-white transition"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}

function NavLinks({ onNavigate }) {
  return (
    <ul className="flex flex-col gap-4 text-base font-medium">
      {NAV_ITEMS.map(({ id, label }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => {
              scrollToSection(id);
              onNavigate?.();
            }}
            className="w-full text-left text-neutral-400 hover:text-white transition cursor-pointer"
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
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar size="sm" />
          <div>
            <p className="text-sm font-semibold text-white">{profile.name}</p>
            <p className="text-[11px] text-neutral-400">{profile.title}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-neutral-700 px-3 py-2 text-sm text-white hover:bg-neutral-900 transition"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 z-40 overflow-auto bg-neutral-950 px-4 py-6 md:hidden">
          <NavLinks onNavigate={() => setMenuOpen(false)} />
          <div className="mt-8">
            <SocialLinks />
          </div>
          <a
            href={profile.resumeFile}
            download
            className="mt-6 block text-center bg-white text-neutral-950 font-semibold py-2 rounded-lg hover:bg-neutral-200 transition"
          >
            Download Resume
          </a>
        </div>
      )}

      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-neutral-950 border-r border-neutral-800 text-white flex-col justify-between py-8 px-6 shadow-xl z-50">
        <div>
          <div className="text-center">
            <Avatar size="lg" />
            <h2 className="mt-4 text-xl font-semibold text-white">{profile.name}</h2>
            <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">{profile.title}</p>
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
            className="block bg-white text-neutral-950 font-semibold py-2.5 rounded-lg hover:bg-neutral-200 transition text-sm shadow-sm"
          >
            Download Resume
          </a>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
