import React from "react";
// import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../views/Home";
import Jobs from "../views/Jobs";
import Dashboard from "../views/Dashboard";
import Company from "../views/Company";
import Login from "../views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        return redirect("/home");
      }
    },
  },
  {
    path: "/home",
    element: <Home />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/");
      }
    },
    children: [
      { path: "", element: <Jobs /> },
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
