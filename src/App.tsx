import "./styles.css";

import { NavLink, Routes, Route } from "react-router-dom";

import Inbox from "./Pages/Inbox";
import Spam from "./Pages/Spam";
import Trash from "./Pages/Trash";
import ViewDetails from "./Component/viewDetails";
import Header from "./Component/Header";

export default function App() {
  const getIsActive = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? " crimson" : "cornflowerblue",
    fontSize: isActive ? " 2rem" : "1.75rem"
  });

  return (
    <div className="App">
      <nav className="aside">
        <NavLink style={getIsActive} className="link" to="/">
          Inbox{" "}
        </NavLink>
        <NavLink style={getIsActive} className="link" to="/Spam">
          {" "}
          Spam{" "}
        </NavLink>
        <NavLink style={getIsActive} className="link" to="/Trash">
          {" "}
          Trash{" "}
        </NavLink>
      </nav>

      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/Spam" element={<Spam />} />
          <Route path="/Trash" element={<Trash />} />
          <Route path="/details/:Id" element={<ViewDetails />} />
        </Routes>
      </div>
    </div>
  );
}
