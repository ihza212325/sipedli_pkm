import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "../views/Home";
import Jobs from "../views/Jobs";
import Dashboard from "../views/Dashboard";
import Company from "../views/Company";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "jobs", element: <Jobs /> },
      { path: "company", element: <Company /> },
    ],
  },
  //   {
  //     path: "/signup",
  //     element: <SignUp />,
  //   },
  //   {
  //     path: "/lowongan",
  //     element: <MenuLowongan />,
  //     children: [
  //       { path: "", element: <LowonganKerja /> },
  //       { path: ":id", element: <DetailJob /> },
  //     ],
  //   },
]);

export default router;
