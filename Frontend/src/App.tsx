import Home from "./pages/homepage";
import Admin from "./pages/admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminTest from "./pages/admin-test";
import Test from "./pages/test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<Test />} />
        <Route path="/admin-test" element={<AdminTest />} />
      </Routes>
    </Router>
  );
}

export default App;
