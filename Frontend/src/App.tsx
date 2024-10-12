import Home from "./pages/homepage";
import Admin from "./pages/admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./pages/test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
