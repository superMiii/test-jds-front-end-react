import { useState } from "react";

export const Sidebar = ({ menu }) => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  return (
    <div className={`component-sidebar ${isActive ? "active" : null}`}>
      <div className="custom-menu">
        <button
          type="button"
          id="sidebarCollapse"
          onClick={handleToggle}
          className="btn btn-primary"
        >
          ☰
        </button>
      </div>
      <div className="p-4 pt-5">
        <h2>Admin Page</h2>
        <div className="d-flex justify-content-center flex-column">
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              menu(e.target.innerText);
            }}
            className="btn-sidebar"
          >
            Dashboard
          </a>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              menu(e.target.innerText);
            }}
            className="btn-sidebar"
          >
            List
          </a>
        </div>
      </div>
    </div>
  );
};
