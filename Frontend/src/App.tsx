import Home from "./pages/homepage";
import ScrollToHashElement from "./components/ScrollToHashElement";
import Test from "./pages/test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboardPage from "./pages/admin-dashboard";
import Admin from "./pages/admin";

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
<<<<<<< HEAD
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route
          path="/admin/financial-dashboard"
          element={<FinancialDashboard />}
        />
        <Route path="/admin/animal-dashboard" element={<AnimalDashboard />} />
        <Route path="/admin/forms-dashboard" element={<FormsDashboard />} />
        <Route path="/test" element={<Test />} />
=======
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin" element={<Admin />} />
>>>>>>> ee18fc8c3d11f218ef8dd7f2506f8ea8949725b6
      </Routes>
      <ScrollToHashElement />
    </Router>
  );
}

export default App;
