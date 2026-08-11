import Sidebar from "./Components/Sidebar";
import PageBubbles from "./Components/PageBubbles";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Internship from "./Pages/Internship";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ffffff] selection:bg-neutral-800 selection:text-white">
      <Sidebar />

      <main className="relative min-h-screen w-full p-6 pt-24 md:p-10 md:pt-10 md:ml-64 overflow-hidden">
        <PageBubbles />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Home />
          <About />
         
          <Skills />
          <Projects />
          <Internship />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
