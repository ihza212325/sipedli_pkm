import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import Dashboard from "./Dashboard";
// import Form from "../components/Form";
// import Company from "./Company";
import Job from "./Jobs";
const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div id="bodyHome" class="flex flex-row bg-white dark:bg-black">
        <div class="flex flex-row w-full">
          <Sidebar />
          {/* <Dashboard /> */}
          <Job />
          {/* <Form /> */}
          {/* <Company /> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
