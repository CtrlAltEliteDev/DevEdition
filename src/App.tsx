import { useState } from "react";
import Hero from "./Hero";
import ValueFocus from "./ValueFocus";
import Projects from "./Projects";
import Experience from "./Experience";
import AISystems from "./AISystems";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import FloatingNavbar from "./FloatingNavbar";

type PageView = "systems" | "projects" | "experience" | "aiSystems";

export default function App() {
  const [view, setView] = useState<PageView>("systems");

  return (
    <main className="page">
      <Sidebar />
      <FloatingNavbar
        activeView={view}
        onOpenSystems={() => setView("systems")}
        onOpenProjects={() => setView("projects")}
        onOpenExperience={() => setView("experience")}
        onOpenAiSystems={() => setView("aiSystems")}
      />
      {view === "systems" ? (
        <>
          <Hero
            onOpenProjects={() => setView("projects")}
            onOpenExperience={() => setView("experience")}
            onOpenAiSystems={() => setView("aiSystems")}
          />
          <ValueFocus />
          <Footer />
        </>
      ) : view === "projects" ? (
        <Projects
          onBackSystems={() => setView("systems")}
          onOpenExperience={() => setView("experience")}
          onOpenAiSystems={() => setView("aiSystems")}
        />
      ) : view === "experience" ? (
        <Experience
          onBackSystems={() => setView("systems")}
          onOpenProjects={() => setView("projects")}
          onOpenAiSystems={() => setView("aiSystems")}
        />
      ) : (
        <AISystems
          onBackSystems={() => setView("systems")}
          onOpenExperience={() => setView("experience")}
          onOpenProjects={() => setView("projects")}
        />
      )}
    </main>
  );
}
