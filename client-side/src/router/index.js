import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "../views/Home";
import LowonganKerja from "../views/LowonganKerja";
// import Login from "../views/Login";
// import "./index.css";
import DetailJob from "../views/DetailJob";
import MenuLowongan from "../views/MenuLowongan";
import SignUp from "../views/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/lowongan",
    element: <MenuLowongan />,
    children: [
      { path: "", element: <LowonganKerja /> },
      { path: ":id", element: <DetailJob /> },
    ],
  },
]);

export default router;
