import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Data } from "./Data";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { SignIn } from "./components/SignIn";
import { Home } from "./Home";
import { RequireAuth } from "./utils/RequireAuth";
import { Dashboard } from "./Dashboard";

function App() {
  return (
    <>
      <nav className="myNavbar sticky-top">
        <Navbar />
      </nav>
      <div className="parent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="data"
            element={
              <RequireAuth>
                <Data />
              </RequireAuth>
            }
          />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
