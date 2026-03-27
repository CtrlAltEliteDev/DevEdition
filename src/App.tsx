import { useState } from "react";
import Hero from "./Hero";
import ValueFocus from "./ValueFocus";
import Projects from "./Projects";
import Experience from "./Experience";
import AISystems from "./AISystems";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import FloatingNavbar from "./FloatingNavbar";
import GlobalBrand from "./GlobalBrand";

type PageView = "systems" | "projects" | "experience" | "aiSystems";

export default function App() {
  const [view, setView] = useState<PageView>("systems");

  return (
    <main className="page">
      <GlobalBrand />
      <div className="global-brand-spacer" />
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
          <Hero />
          <ValueFocus />
        </>
      ) : view === "projects" ? (
        <Projects />
      ) : view === "experience" ? (
        <Experience />
      ) : (
        <AISystems />
      )}
      <Footer />
    </main>
  );
}
