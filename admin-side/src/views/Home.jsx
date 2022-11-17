import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div id="bodyHome" class="flex flex-row bg-white dark:bg-black">
        <div class="flex flex-row w-full">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Home;
