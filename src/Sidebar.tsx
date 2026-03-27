import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="left-sidebar">
      <div className="left-sidebar-icons">
        <img src="/fig1.svg" alt="" className="left-sidebar-icon" />
        <img src="/fig2.svg" alt="" className="left-sidebar-icon" />
        <img src="/fig3.svg" alt="" className="left-sidebar-icon" />
        <img src="/fig4.svg" alt="" className="left-sidebar-icon" />
      </div>
      <img src="/avatar.svg" alt="Profile avatar" className="left-sidebar-avatar" />
    </aside>
  );
}
