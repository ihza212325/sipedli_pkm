import React from "react";
// import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import LowonganKerja from "../views/LowonganKerja";
// import Login from "../views/Login";
// import "./index.css";
import DetailJob from "../views/DetailJob";
import MenuLowongan from "../views/MenuLowongan";
import Tanya from "../views/Tanya";
import Survey from "../views/Survey";
import SignUp from "../views/SignUp";
import ChatGpt from "../views/chatGpt";
import AdminPage from "../views/admin";
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
  {
    path: "/tanya",
    element: <Tanya />,
    children: [
      { path: "", element: <ChatGpt /> },
      { path: ":id", element: <DetailJob /> },
    ],
  },
  {
    path: "/survey",
    element: <Survey />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

export default router;
