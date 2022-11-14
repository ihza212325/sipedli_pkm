import "./App.css";
import NavBar from "./components/Navbar";
import DetailJob from "./views/DetailJob";
// import Home from "./views/Home";
// import LowonganKerja from "./views/LowonganKerja";
function App() {
  return (
    <>
      <NavBar />
      {/* <Home /> */}
      {/* <LowonganKerja /> */}
      <DetailJob />
    </>
  );
}

export default App;
