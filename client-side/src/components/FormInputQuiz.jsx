import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { PostQuiz } from "../store/action";

const FormInputQuiz = ({ setShowModal, formType }) => {
  const [formLogin, setFormLogin] = useState({
    title: "",
  });

  const initialQuest = {
    question: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    answer: "",
    imageurl: "",
    cek: false,
  };
  const [addQuest, setaddQuest] = useState(false);
  const [addQuestbutton, setaddQuestbutton] = useState(false);
  const [quest, setquest] = useState([]);
  //   const [typeForm, setTypeForm] = useState(null);

  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  useEffect(() => {
    // setTypeForm(formType);
  }, []);
  const handleChange = (e) => {
    // console.log("loon");
    const name = e.target.name;
    const value = e.target.value;

    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  const handleAddQuest = (e) => {
    // e.preventDefault();
    setaddQuest(true);
    setquest([...quest, initialQuest]);
    console.log(quest);
  };
  const handleChangequest = (e) => {
    // console.log("ihza");
    const id = e.target.id;
    const name = e.target.name;
    const value = e.target.value;
    console.log(id, name, value);

    const nextArr = quest.map((el, i) => {
      // console.log(i);
      if (i === +id) {
        // console.log("lom");
        return {
          ...quest[id],
          [name]: value,
        };
      } else {
        // console.log("kaw");
        return el;
      }
    });
    console.log(nextArr, "omo");
    setquest(nextArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formLogin);
    console.log(quest, "dsadas");
    dispatch(PostQuiz(formLogin, quest)).then((data) => {
      console.log(data);
      if (data === "error") {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    });
  };
  console.log(quest[quest.length - 1]?.cek);
  return (
    <>
      {/* {typeForm === "FormLogin" ? ( */}
      <>
        <div className="justify-center h-screen items-center  overflow-x-hidden  fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative   my-6 mx-auto w-full md:w-5/12">
            {/*content*/}
            <div className="border-0 overflow-y-auto h-10/12  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">Input Quiz</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/*body*/}
              <form action="" onSubmit={handleSubmit}>
                <div className="relative p-6 flex-auto">
                  <p className="font-semibold py-5">Add quiz</p>
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formLogin.title}
                      onChange={handleChange}
                      aria-describedby="helper-text-explanation"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Input your title"
                    />
                    <div>
                      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>

                    <p className="font-semibold">Question </p>
                    {quest.map((e) => {
                      if (e.cek === true) {
                        return (
                          <div className="justify-between flex flex-row px-5 py-2 rounded-lg bg-green-100">
                            <div>
                              <p>{e.question}</p>
                            </div>
                            <div>
                              <p>delete</p>
                            </div>
                          </div>
                        );
                      }
                    })}
                    {addQuest &&
                      quest.map((data, index) => {
                        return (
                          <>
                            {index === quest.length - 1 && (
                              <>
                                <input
                                  type="question"
                                  id={index}
                                  name="question"
                                  value={data.question}
                                  onChange={handleChangequest}
                                  aria-describedby="helper-text-explanation"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Input your question"
                                />
                                <div className="flex flex-col md:flex-row">
                                  <input
                                    type="choice1"
                                    id={index}
                                    name="choice1"
                                    value={data.choice1}
                                    onChange={handleChangequest}
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Input your choice1"
                                  />
                                  <input
                                    type="text"
                                    id={index}
                                    name="choice2"
                                    value={data.choice2}
                                    onChange={handleChangequest}
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Input your choice2"
                                  />
                                </div>
                                <div className="flex flex-col md:flex-row">
                                  <input
                                    type="text"
                                    id={index}
                                    name="choice3"
                                    value={data.choice3}
                                    onChange={handleChangequest}
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Input your choice3"
                                  />
                                  <input
                                    type="text"
                                    id={index}
                                    name="choice4"
                                    value={data.choice4}
                                    onChange={handleChangequest}
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Input your choice4"
                                  />
                                </div>
                                <input
                                  type="text"
                                  id={index}
                                  name="answer"
                                  value={data.answer}
                                  onChange={handleChangequest}
                                  aria-describedby="helper-text-explanation"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Input your answer"
                                />
                                <p className="text-red-500 text-sm">
                                  *jawaban harus sama seperti piihan "copas
                                  saja"
                                </p>
                                <img
                                  src={
                                    data.imageurl
                                      ? data.imageurl
                                      : "https://ih1.redbubble.net/image.974908313.3949/fposter,small,wall_texture,product,750x1000.jpg"
                                  }
                                  className="w-1/2 justify-center"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id={index}
                                  name="imageurl"
                                  value={data.imageurl}
                                  onChange={handleChangequest}
                                  aria-describedby="helper-text-explanation"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Input your imageurl"
                                />
                              </>
                            )}
                          </>
                        );
                      })}
                    <div className="flex flex-row justify-between">
                      {addQuest && (
                        <div
                          onClick={() => {
                            setaddQuest(!addQuest);
                            const newarr = quest.slice(0, quest.length - 1);
                            setquest(newarr);
                          }}
                          className="cursor-pointer w-1/2 text-white bg-green-600 border my-8 border-green-600 focus:outline-none  font-medium text-sm px-5 py-2.5 mr-2 mb-2  flex flex-row gap-2 justify-center items-center h-10 shadow-5xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none ease-linear duration-100 "
                        >
                          <p>cancel</p>
                        </div>
                      )}
                      {addQuest && (
                        <div
                          onClick={() => {
                            setaddQuest(!addQuest);
                            // const newarr = quest.slice(0, quest.length - 1);
                            // setquest(newarr);
                            const newArray = quest.map((item, index) => {
                              if (index === quest.length - 1) {
                                return { ...item, cek: true }; // Mengubah id menjadi 10 pada index terakhir
                              }
                              return item; // Item lainnya tetap sama
                            });

                            // Memperbarui state myArray dengan array baru yang telah dimodifikasi
                            console.log(newArray);
                            setquest(newArray);
                          }}
                          className="cursor-pointer w-1/2 text-white bg-green-600 border my-8 border-green-600 focus:outline-none  font-medium text-sm px-5 py-2.5 mr-2 mb-2  flex flex-row gap-2 justify-center items-center h-10 shadow-5xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none ease-linear duration-100 "
                        >
                          <p>submit</p>
                        </div>
                      )}
                    </div>
                  </div>
                  {!addQuest && (
                    <div
                      onClick={() => {
                        handleAddQuest();
                        setaddQuest(true);
                      }}
                      className="cursor-pointer w-full text-white bg-green-600 border my-8 border-green-600 focus:outline-none  font-medium text-sm px-5 py-2.5 mr-2 mb-2  flex flex-row gap-2 justify-center items-center h-10 shadow-5xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none ease-linear duration-100 "
                    >
                      <p>add question</p>
                    </div>
                  )}
                  {/* <div className="py-4">
                    <a href="test">Forgot your choice1?</a>
                  </div> */}
                  <button
                    type="submit"
                    className="text-white bg-red-1000 border my-8 border-red-1000 focus:outline-none  font-medium text-sm px-5 py-2.5 mr-2 mb-2  flex flex-row gap-2 justify-center items-center w-full h-10 shadow-5xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none ease-linear duration-100 "
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
      {/* ) : null} */}
    </>
  );
};

export default FormInputQuiz;
