import { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
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
          <Link to="/dashboard" className="btn-sidebar">
            Dashboard
          </Link>
          <Link to="/data" className="btn-sidebar">
            List
          </Link>
        </div>
      </div>
    </div>
  );
};
