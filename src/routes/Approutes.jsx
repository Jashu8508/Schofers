import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Scholarships from "../pages/Scholarships";
import DigitalLiteracy from "../pages/DigitalLiteracy";
import CyberSafety from "../pages/CyberSafety";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/scholarships" element={<Scholarships />} />
      <Route path="/digital-literacy" element={<DigitalLiteracy />} />
      <Route path="/cyber-safety" element={<CyberSafety />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;