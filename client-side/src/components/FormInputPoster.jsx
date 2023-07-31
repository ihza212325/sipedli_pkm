import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { PostPoster } from "../store/action";

const FormInputPoster = ({ setShowModal, formType }) => {
  const [formLogin, setFormLogin] = useState({
    urlPoster: "",
  });
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formLogin, "ini poster");
    dispatch(PostPoster(formLogin)).then((data) => {
      console.log(data);
      if (data === "error") {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    });
  };
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
                <h3 className="text-3xl font-semibold">Form Input Poster</h3>
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
                  <p className="font-semibold py-5">Add Url Poster</p>
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      id="urlPoster"
                      name="urlPoster"
                      value={formLogin.urlPoster}
                      onChange={handleChange}
                      aria-describedby="helper-text-explanation"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Input your urlPoster"
                    />
                  </div>
                  {/* <div className="py-4">
                    <a href="test">Forgot your password?</a>
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
    </>
  );
};

export default FormInputPoster;
