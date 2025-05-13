// App.js - Updated with proper layout to prevent navbar overlap
import { BrowserRouter as Router, Routes, Route } from "react-router"; // Fixed import
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {/* This wrapper div adds padding to prevent content from being hidden under the navbar */}
        <div className="pt-24 flex-grow">
          {" "}
          {/* pt-24 gives enough space for the navbar */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
