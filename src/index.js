import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { store } from "frontend/app/store";
import { Provider } from "react-redux";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Provider store={store}>
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
          </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
