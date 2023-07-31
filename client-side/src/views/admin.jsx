import { useState } from "react";
import NavBar from "../components/Navbar";
import FormInputPoster from "../components/FormInputPoster";
import FormInputQuiz from "../components/FormInputQuiz";
import FormScoreUser from "../components/FormScoreUser";
const AdminPage = () => {
  const [showModalInputPoster, setshowModalInputPoster] = useState(false);
  const [showModalInputQuiz, setshowModalInputQuiz] = useState(false);
  const [showModalInputScore, setshowModalInputScore] = useState(false);
  return (
    <>
      <NavBar />
      <div className="p-12">
        <p className="font-bold text-4xl">ADMIN PAGE</p>
      </div>
      <div className="p-12 flex-col flex md:flex-row flex-wrap w-full  md:space-x-8 space-y-4 md:space-y-0 items-center justify-center">
        <div
          onClick={() => {
            setshowModalInputPoster(true);
          }}
          className="shadow-xl w-72 md:w-96 space-y-3 flex flex-col justify-center items-center p-7 h-56  rounded-xl bg-gradient-to-tr from-rose-600 via-amber-600 to-yellow-400 opacity-80 cursor-pointer "
        >
          {/* <div className="invisible hidden md:block md:visible absolute -translate-y-24 translate-x-48">
                          <img src={image} className="w-56 h-56" alt="" />
                        </div> */}
          <div className="text-2xl font-semibold text-white capitalize ">
            {/* {item.title} */} Input Poster
          </div>
        </div>
        <div
          onClick={() => {
            setshowModalInputQuiz(true);
          }}
          className="shadow-xl w-72 md:w-96 space-y-3 flex flex-col justify-center items-center p-7 h-56  rounded-xl bg-gradient-to-tr from-rose-600 via-amber-600 to-yellow-400 opacity-80 cursor-pointer "
        >
          {/* <div className="invisible hidden md:block md:visible absolute -translate-y-24 translate-x-48">
                          <img src={image} className="w-56 h-56" alt="" />
                        </div> */}
          <div className="text-2xl font-semibold text-white capitalize ">
            {/* {item.title} */} Input Quiz
          </div>
        </div>
        <div
          onClick={() => {
            setshowModalInputScore(true);
          }}
          className="shadow-xl w-72 md:w-96 space-y-3 flex flex-col justify-center items-center p-7 h-56  rounded-xl bg-gradient-to-tr from-rose-600 via-amber-600 to-yellow-400 opacity-80 cursor-pointer "
        >
          {/* <div className="invisible hidden md:block md:visible absolute -translate-y-24 translate-x-48">
                          <img src={image} className="w-56 h-56" alt="" />
                        </div> */}
          <div className="text-2xl font-semibold text-white capitalize ">
            {/* {item.title} */} View Score
          </div>
        </div>
      </div>
      {showModalInputPoster ? (
        // ini tempat register
        <FormInputPoster
          setShowModal={setshowModalInputPoster}
          //   formType={"FormLogin"}
        />
      ) : null}
      {showModalInputQuiz ? (
        // ini tempat register
        <FormInputQuiz
          setShowModal={setshowModalInputQuiz}
          //   formType={"FormLogin"}
        />
      ) : null}
      {showModalInputScore ? (
        // ini tempat register
        <FormScoreUser
          setShowModal={setshowModalInputScore}
          //   formType={"FormLogin"}
        />
      ) : null}
    </>
  );
};

export default AdminPage;
