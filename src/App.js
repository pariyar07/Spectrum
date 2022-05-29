import Homepage from "frontend/pages/homepage/homepage.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "frontend/pages/login/login"
import SignUp from "frontend/pages/signup/signup"

function App() {
  return (
    <div className="App flex justify-between w-screen">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/explore" element={<RequiresAuth><Explore /></RequiresAuth>} /> */}
        <Route path="*" element={<div className="flex justify-center items-center min-w-full"><h1 style={{ fontSize: "5rem" }}>Page Not Found!</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;