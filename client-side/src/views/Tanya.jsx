import { Outlet } from "react-router";
import NavBar from "../components/Navbar";

const Tanya = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Tanya;
