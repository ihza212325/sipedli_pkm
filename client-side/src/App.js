import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import router from "./router";
// import DetailJob from "./views/DetailJob";
// import Home from "./views/Home";
// import LowonganKerja from "./views/LowonganKerja";
// import Login from "./views/Login";
// import FormLogin from "./components/FormLogin";
function App() {
  return (
    <>
      <NavBar />
      {/* <Home /> */}
      {/* <LowonganKerja /> */}
      {/* <DetailJob /> */}
      {/* <Login /> */}
      {/* <FormLogin /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
