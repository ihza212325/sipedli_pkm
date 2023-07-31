import Aside from "../components/Aside";
import CardJob from "../components/CardJob";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import NavBar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, PostScore } from "../store/action";
import NavBar from "../components/Navbar";
import square from "../images/square.svg";
import circle from "../images/circle.svg";
import wajik from "../images/wajik.svg";
import triangel from "../images/triangel.svg";
import image from "../images/Artboard 1.png";
import logos from "../images/Artboard 7.svg";

const Survey = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quiz, loading, error } = useSelector((state) => state.quiz);
  const [selectQuiz, setselectQuiz] = useState({});
  const [countCorrect, setcountCorrect] = useState(0);
  const [isCorrect, setisCorrect] = useState("");
  const [asnwerA, setasnwerA] = useState(false);
  const [asnwerB, setasnwerB] = useState(false);
  const [asnwerC, setasnwerC] = useState(false);
  const [asnwerD, setasnwerD] = useState(false);
  const [numberQuest, setnumberQuest] = useState(1);
  const [modal, setmodal] = useState(false);
  const [modalComplete, setmodalComplete] = useState("");
  const [lastScore, setlastScore] = useState(0);
  const [loadingAnswer, setloadingAnswer] = useState(false);
  useEffect(() => {
    dispatch(fetchQuiz());
  }, []);

  const selectAnswer = (quest, answer) => {
    if (selectQuiz.Quests.length >= numberQuest) {
      let count = countCorrect;
      if (quest.answer === answer) {
        setcountCorrect(countCorrect + 1);
        count += 1;
      }
      if (selectQuiz.Quests.length === numberQuest) {
        const score = (count / selectQuiz.Quests.length) * 100;
        setlastScore(score);
        setloadingAnswer(true);
        setTimeout(() => {
          setnumberQuest(numberQuest + 1);
          setmodalComplete(true);
          setmodal(false);
          setloadingAnswer(false);
          setasnwerA(false);
          setasnwerB(false);
          setasnwerC(false);
          setasnwerD(false);
        }, 2000);
      } else {
        setloadingAnswer(true);
        setTimeout(() => {
          setloadingAnswer(false);
          setnumberQuest(numberQuest + 1);
          setloadingAnswer(false);
          setasnwerA(false);
          setasnwerB(false);
          setasnwerC(false);
          setasnwerD(false);
        }, 2000);
      }
    }
  };
  return (
    <>
      <div>
        {modalComplete && (
          <div className="fixed bg-black bg-opacity-50 backdrop-blur-sm w-full h-full z-50">
            <div className="flex h-full justify-center items-center">
              <div className="w-full h-full bg-blue-50 flex flex-col  justify-center items-center space-y-10 p-5">
                <img
                  src={logos}
                  className="w-full h-full absolute z-10 md:translate-x-80"
                  alt=""
                />
                <div className="z-20 md:-translate-x-80 space-y-80 md:space-y-36 justify-center items-center flex flex-col">
                  <div className="flex flex-col justify-center text-center ">
                    <p className="text-6xl font-bold text-blue-1001">SELAMAT</p>
                    <p className=" mt-2 text-2xl font-bold text-purple-700">
                      ANDA TELAH MENYELESAIKAN QUIZ
                    </p>
                    <p className=" mt-7 z-20 text-4xl font-bold text-blue-1001">
                      Score : {lastScore}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setcountCorrect(0);
                      setlastScore(0);
                      setnumberQuest(1);
                      setmodalComplete(false);
                      const obj = {
                        name: localStorage.getItem("username"),
                        score: lastScore,
                        quiz: selectQuiz.title,
                      };
                      dispatch(PostScore(obj));
                    }}
                    className="z-50 p-3 px-7 bg-orange-400 rounded-full text-white w-32 font-bold uppercase hover:scale-105"
                  >
                    selesai
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {modal && selectQuiz && (
          <div className="fixed bg-black bg-opacity-50 backdrop-blur-sm w-full h-full z-50">
            <div className="flex h-full justify-center items-center overflow-auto overflow-y-auto">
              <div className="w-full h-full bg-repeat-y bg-[url('https://i.ibb.co/NghLLLD/backroid-quiz.png')] flex flex-col justify-center items-center space-y-5 px-5 text-white">
                <div className="text-2xl font-bold uppercase">
                  {numberQuest}
                  {". "}{" "}
                  {
                    selectQuiz.Quests[selectQuiz.Quests.length - numberQuest]
                      .question
                  }
                </div>
                <div className=" mb-0 justify-center flex">
                  {selectQuiz.Quests[selectQuiz.Quests.length - numberQuest]
                    .imageurl && (
                    <img
                      src={
                        selectQuiz.Quests[
                          selectQuiz.Quests.length - numberQuest
                        ].imageurl
                      }
                      className="w-72 h-96"
                      alt=""
                    />
                  )}
                </div>
                <div className="w-full space-y-1 ">
                  <div className="flex  text-white w-full justify-between space-x-1">
                    <div
                      onClick={() => {
                        selectAnswer(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ],
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice1
                        );
                        setasnwerA(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice1 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerB(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice2 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerC(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice3 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerD(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice4 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                      }}
                      className={`cursor-pointer hover:scale-105 ease-in-out duration-150 w-full bg-red-700 flex space-x-3 p-5 rounded-sm  ${
                        asnwerA && "ring-8 ring-green-500 z-50"
                      }`}
                    >
                      <div className="">
                        <img src={square} className="w-10 h-10" alt="" />
                      </div>
                      <div className="font-bold drop-shadow-md uppercase text-2xl">
                        {
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice1
                        }
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        selectAnswer(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ],
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice2
                        );
                        setasnwerA(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice1 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerB(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice2 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerC(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice3 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerD(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice4 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                      }}
                      className={`cursor-pointer hover:scale-105 ease-in-out duration-150 w-full bg-blue-700 flex space-x-3 p-5 rounded-sm  ${
                        asnwerB && "ring-8 ring-green-500 z-50"
                      }`}
                    >
                      <div>
                        <img src={circle} className="w-10 h-10" alt="" />
                      </div>
                      <div className="font-bold drop-shadow-md uppercase text-2xl">
                        {
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice2
                        }
                      </div>{" "}
                    </div>
                  </div>
                  <div className="flex text-white w-full justify-between space-x-1">
                    <div
                      onClick={() => {
                        selectAnswer(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ],
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice3
                        );
                        setasnwerA(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice1 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerB(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice2 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerC(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice3 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerD(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice4 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                      }}
                      className={`cursor-pointer hover:scale-105 ease-in-out duration-150 w-full bg-green-700 flex space-x-3 p-5 rounded-sm  ${
                        asnwerC && "ring-8 ring-green-500 z-50"
                      }`}
                    >
                      <div>
                        <img
                          src={wajik}
                          className="w-8 md:w-10 h-8 md:h-10"
                          alt=""
                        />
                      </div>
                      <div className="font-bold drop-shadow-md uppercase text-2xl">
                        {
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice3
                        }
                      </div>{" "}
                    </div>
                    <div
                      onClick={() => {
                        selectAnswer(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ],
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice4
                        );
                        setasnwerA(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice1 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerB(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice2 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerC(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice3 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                        setasnwerD(
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice4 ===
                            selectQuiz.Quests[
                              selectQuiz.Quests.length - numberQuest
                            ].answer
                        );
                      }}
                      className={`cursor-pointer hover:scale-105 ease-in-out duration-150 w-full bg-yellow-500 flex space-x-3 p-5 rounded-sm  ${
                        asnwerD && "ring-8 ring-green-500 z-50"
                      }`}
                    >
                      <div>
                        <img
                          src={triangel}
                          className="w-8 md:w-10 h-8 md:h-10"
                          alt=""
                        />
                      </div>
                      <div className="font-bold drop-shadow-md uppercase text-2xl">
                        {
                          selectQuiz.Quests[
                            selectQuiz.Quests.length - numberQuest
                          ].choice4
                        }
                      </div>{" "}
                    </div>
                  </div>
                  <div>
                    ini soal ke {numberQuest}/{selectQuiz.Quests.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <NavBar />
        <div className="w-full h-full bg-blue-50">
          <div className="flex justify-start mb-10 md:px-40 md:p-10 pl-10 p-4  text-blue-1001">
            <h1 className="text-5xl font-bold">Let's Play</h1>
          </div>
          <div className="space-y-5 text-black md:pl-40 pl-0">
            <div className="flex w-full justify-start flex-col md:flex-row flex-wrap items-center gap-24 pb-10">
              {quiz &&
                quiz.map((item) => {
                  return (
                    <>
                      <div className="shadow-xl w-72 md:w-96 space-y-3 flex flex-col justify-between p-7 h-56 items-start rounded-xl bg-gradient-to-tr from-rose-600 via-amber-600 to-yellow-400 opacity-80 ">
                        <div className="invisible hidden md:block md:visible absolute -translate-y-24 translate-x-48">
                          <img src={image} className="w-56 h-56" alt="" />
                        </div>
                        <div className="text-2xl font-semibold text-white capitalize ">
                          {item.title}
                        </div>
                        <div className="cursor-pointer shadow-md bg-gradient-to-t from-rose-600 via-amber-600 to-yellow-400 p-2 px-5 hover:scale-95  ease-linear duration-100  -translate-x-2 rounded-full ">
                          <button
                            onClick={() => {
                              setmodal(true);
                              setselectQuiz(item);
                            }}
                            className="font-semibold text-white"
                          >
                            Start Quiz
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Survey;
