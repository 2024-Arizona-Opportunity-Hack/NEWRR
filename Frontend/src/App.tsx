import Home from "./pages/homepage";
import ScrollToHashElement from "./components/ScrollToHashElement";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/admin-dashboard";
import FinancialDashboard from "./pages/financial-dashboard";
import FormsDashboard from "./pages/forms-dashboard";
import AnimalDashboard from "./pages/animal-dashboard";
import Admin from "./pages/admin";
import Test from "./pages/test";

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route
          path="/admin/financial-dashboard"
          element={<FinancialDashboard />}
        />
        <Route path="/admin/animal-dashboard" element={<AnimalDashboard />} />
        <Route path="/admin/forms-dashboard" element={<FormsDashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <ScrollToHashElement />
    </Router>
  );
}

export default App;
