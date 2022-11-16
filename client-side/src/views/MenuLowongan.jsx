import { Outlet } from "react-router";
import NavBar from "../components/Navbar";

const MenuLowongan = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MenuLowongan;
