import LeftNav from "frontend/components/leftNav.jsx";
import RightNav from "frontend/components/rightNav.jsx";
import Homepage from "frontend/pages/homepage/homepage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex justify-between w-screen">
      <LeftNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<div style={{ display: "flex", justifyContent: "center" }}><h1 style={{ fontSize: "5rem" }}>Page Not Found!</h1></div>} />
      </Routes>
      <RightNav />
    </div>
  );
}

export default App;