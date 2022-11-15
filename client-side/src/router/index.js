import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "../views/Home";
import LowonganKerja from "../views/LowonganKerja";
// import Login from "../views/Login";
// import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lowongan",
    element: <LowonganKerja />,
  },
]);

export default router;
