import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "frontend/context/authContext";
import { ToastContainer } from "react-toastify";
import { PostsProvider } from "frontend/context/postContext.jsx";
import { UserProvider } from "frontend/context/userContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <PostsProvider>
            <App />
            <ToastContainer
              position="bottom-right"
              autoClose="3000"
              hideProgressBar="false"
              closeOnClick="true"
              pauseOnHover="true"
              draggable="true"
              progress="undefined"
            />
          </PostsProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
