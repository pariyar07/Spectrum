import Homepage from "frontend/pages/homepage/homepage.jsx";
import SinglePost from "frontend/components/singlePost.jsx"
import Profile from "frontend/pages/profile/profile.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "frontend/pages/login/login";
import SignUp from "frontend/pages/signup/signup";
import { RequiresAuth } from "frontend/services/requiresAuth.jsx";
import Bookmark from "frontend/pages/bookmark/bookmark.jsx";

function App() {
  return (
    <div className="App flex justify-between w-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<RequiresAuth><Homepage /></RequiresAuth>} />
        <Route path="/bookmarks" element={<RequiresAuth><Bookmark /></RequiresAuth>} />
        <Route path="/post/:postId" element={<RequiresAuth><SinglePost /></RequiresAuth>} />
        <Route path="/profile" element={<RequiresAuth><Profile/></RequiresAuth>} />
        <Route path="*" element={<div className="flex justify-center items-center min-w-full"><h1 style={{ fontSize: "5rem" }}>Page Not Found!</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;