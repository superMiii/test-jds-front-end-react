import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { ListData } from "./components/ListData";
import { Sidebar } from "./components/Sidebar";
import "./style/data.css";
export const Data = () => {
  const [menu, setMenu] = useState("Dashboard");
  const handleMenu = (menu) => {
    setMenu(menu);
  };
  return (
    <div className="wrapper d-flex align-items-stretch">
      <Sidebar menu={handleMenu} />
      <div className="content container-fluid p-4 p-md-5 pt-5">
        {menu === "Dashboard" ? <Dashboard /> : <ListData />}
      </div>
    </div>
  );
};
