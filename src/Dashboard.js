import { DashboardContent } from "./components/DashboardContent";
import { Sidebar } from "./components/Sidebar";
import "./style/data.css";
export const Dashboard = () => {
  return (
    <div className="wrapper d-flex align-items-stretch">
      <Sidebar />
      <div className="content container-fluid p-4 p-md-5 pt-5">
        <DashboardContent />
      </div>
    </div>
  );
};
