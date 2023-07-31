import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { RegisterAdmin, fetchScore } from "../store/action";
import moment from "moment";

const FormScoreUser = ({ setShowModal, formType }) => {
  const [formLogin, setFormLogin] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  //   const [typeForm, setTypeForm] = useState(null);
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const { score, loading, error } = useSelector((state) => state.quiz);

  useEffect(() => {
    // setTypeForm(formType);
    dispatch(fetchScore());
  }, []);
  console.log(score, "dsadsa");
  return (
    <>
      {/* {typeForm === "FormLogin" ? ( */}
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative  my-6 mx-auto w-full md:w-5/12">
            {/*content*/}
            <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">LOG USER SCORE</h3>
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
              <form action="">
                <div className="relative p-6 flex-auto">
                  <p className="font-semibold py-5">Table Score</p>
                  {/* <div className="py-4">
                    <a href="test">Forgot your password?</a>
                  </div> */}
                  <div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              Username
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Quiz
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Score
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Time
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {!loading &&
                            score.map((data) => {
                              return (
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                  <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    {data.name}
                                  </th>
                                  <td class="px-6 py-4">{data.quiz}</td>
                                  <td class="px-6 py-4">{data.score}</td>
                                  <td class="px-6 py-4">
                                    {moment(data.createdAt)
                                      .locale("id")
                                      .format("DD MMMM YYYY, HH:mm")}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
};

export default FormScoreUser;
