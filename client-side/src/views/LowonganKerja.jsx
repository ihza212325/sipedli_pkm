import Aside from "../components/Aside";
import CardJob from "../components/CardJob";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import NavBar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchJob } from "../store/action";
import NavBar from "../components/Navbar";

const LowonganKerja = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const [selectImage, setselectImage] = useState("");
  const [modalImage, setmodalImage] = useState(false);

  const onClose = () => {
    setmodalImage(false);
    setselectImage("");
  };
  useEffect(() => {
    dispatch(fetchJob());
  }, []);

  // if (loading) {
  //   return <h1>loading....</h1>;
  // }
  return (
    <>
      {modalImage && (
        <div
          onClick={onClose}
          className="fixed bg-black bg-opacity-50 backdrop-blur-sm w-full h-full z-50"
        >
          <div className="flex h-full justify-center items-center">
            <div className="w-96 md:scale-125">
              <img class=" object-cover rounded-lg" src={selectImage} alt="" />
            </div>
          </div>
        </div>
      )}
      <NavBar />
      <div className="relative w-full bg-blue-1001 md:px-40 md:p-10 pl-14 p-4 z-30">
        <p className="font-bold text-5xl text-white">Poster</p>
      </div>
      <div className="relative   ">
        <div className="relative z-30 w-full bg-white h-20"></div>
        <div className="w-11/12 mx-auto px-4 sm:px-6 ">
          <CardJob
            setmodalImage={setmodalImage}
            setselectImage={setselectImage}
            jobs={jobs}
          />
        </div>
      </div>
    </>
  );
};
export default LowonganKerja;
