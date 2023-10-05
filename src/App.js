import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidenav from "./components/navbar/Sidenav";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Table from "./pages/admin/table.js";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
}

export default App;
