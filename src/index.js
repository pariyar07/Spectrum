import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {AuthProvider} from "frontend/context/authContext";
import { ToastContainer } from "react-toastify";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
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
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
