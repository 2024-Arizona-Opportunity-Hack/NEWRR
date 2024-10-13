import Home from "./pages/homepage";
import ScrollToHashElement from "./components/ScrollToHashElement";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/admin-dashboard";

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <ScrollToHashElement />
    </Router>
  );
}

export default App;
