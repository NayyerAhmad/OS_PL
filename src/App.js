import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Programming from "./pages/programLanguage";
import OperatingSys from "./pages/operatingSys";
import Compatibility from "./pages/compatibility";

function App() {
  return (
    <Router>
      <Navbar title="Compatibility Checker" />
      <Routes>
      <Route exact path="/" element={<Home title="Home" />} />
        <Route path="/programming_languages" element={<Programming title="Programming Languages" />}
        />
        <Route path="/operating_systems" element={<OperatingSys title="Operating Systems" />}
        />
        <Route path="/compatibility" element={<Compatibility title="Compatibility Checker" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
