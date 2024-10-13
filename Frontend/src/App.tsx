import Home from "./pages/homepage";
import Admin from "./pages/admin";
import ScrollToHashElement from "./components/ScrollToHashElement";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <ScrollToHashElement />
    </Router>
  );
}

export default App;
