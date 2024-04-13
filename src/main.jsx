import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './index.css'
import Router from "./Routes/Router.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyContextProvider } from "./Context/MyContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvider>
            <RouterProvider router={Router}></RouterProvider>
        <ToastContainer />
    </MyContextProvider>
  </React.StrictMode>
);
