import "./floating-navbar.css";

type PageView = "systems" | "projects" | "experience" | "aiSystems";

type FloatingNavbarProps = {
  activeView: PageView;
  onOpenSystems: () => void;
  onOpenProjects: () => void;
  onOpenExperience: () => void;
  onOpenAiSystems: () => void;
};

export default function FloatingNavbar({
  activeView,
  onOpenSystems,
  onOpenProjects,
  onOpenExperience,
  onOpenAiSystems,
}: FloatingNavbarProps) {
  return (
    <div className="floating-navbar">
      <button type="button">GAME</button>
      <button
        type="button"
        className={activeView === "projects" ? "active" : undefined}
        onClick={onOpenProjects}
      >
        PROJECTS
      </button>
      <button
        type="button"
        className={activeView === "aiSystems" ? "active" : undefined}
        onClick={onOpenAiSystems}
      >
        AI SYSTEMS
      </button>
      <button
        type="button"
        className={activeView === "experience" ? "active" : undefined}
        onClick={onOpenExperience}
      >
        EXPERIENCE
      </button>
      <button
        type="button"
        className={activeView === "systems" ? "active" : undefined}
        onClick={onOpenSystems}
      >
        HERO
      </button>
    </div>
  );
}
