import { ListData } from "./components/ListData";
import { Sidebar } from "./components/Sidebar";
import "./style/data.css";
export const Data = () => {
  return (
    <div className="wrapper d-flex align-items-stretch">
      <Sidebar />
      <div className="content container p-4 p-md-5 pt-5">
        <ListData />
      </div>
    </div>
  );
};
