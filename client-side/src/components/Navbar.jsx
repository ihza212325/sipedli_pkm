import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../images/logo sipedli.png";

import FormRegisterLogin from "./FormRegisterLogin";
import { loginAdmin } from "../store/action";
import menuicon from "../images/menu_icon_152582.png";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeMenu, setactiveMenu] = useState(
    localStorage.getItem("menu") ? localStorage.getItem("menu") : "home"
  );
  const [showModal, setShowModal] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [zindexnav, setzindexnav] = useState("z-30");

  const [modalmobile, setmodalmobile] = useState(false);
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
    console.log(formLogin);
    dispatch(loginAdmin(formLogin)).then((e) => {
      setShowModal(false);
    });
  };
  const handleChangeMenu = () => {};

  return (
    <>
      <div className={`relative bg-white ${zindexnav}`}>
        <div className=" w-11/12 mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-5 md:justify-start md:space-x-10">
            {/* kiri logo dan menu */}
            <div className="flex justify-start lg:w-0 lg:flex-1 space-x-10">
              <a href="test">
                <img className="w-12" src={logo} alt="" />
              </a>
              <nav className="hidden md:flex justify-center items-center ">
                <div>
                  <Link
                    to="/"
                    onClick={() => localStorage.setItem("menu", "home")}
                    className={`${
                      activeMenu === "home"
                        ? "border-b-4 text-blue-1001 font-bold"
                        : "font-bold text-gray-500 "
                    } border-black text-base font-medium mx-2 p-1  hover:text-gray-900`}
                  >
                    HOME
                  </Link>
                </div>
                {localStorage.getItem("username") && (
                  <div>
                    <Link
                      to="/survey"
                      onClick={() => localStorage.setItem("menu", "survey")}
                      className={`${
                        activeMenu === "survey"
                          ? "border-b-4 text-blue-1001 font-bold"
                          : "font-bold text-gray-500 "
                      } border-black text-base font-medium mx-2 p-1  hover:text-gray-900`}
                    >
                      Quiz Literasi
                    </Link>
                  </div>
                )}
                <div>
                  <Link
                    to="/lowongan"
                    onClick={() => localStorage.setItem("menu", "poster")}
                    className={`${
                      activeMenu === "poster"
                        ? "border-b-4 text-blue-1001 font-bold"
                        : "font-bold text-gray-500 "
                    } border-black text-base font-medium mx-2 p-1  hover:text-gray-900`}
                  >
                    Poster
                  </Link>
                </div>
                <div>
                  <Link
                    to="/tanya"
                    onClick={() => localStorage.setItem("menu", "tanya")}
                    className={`${
                      activeMenu === "tanya"
                        ? "border-b-4 text-blue-1001 font-bold"
                        : "font-bold text-gray-500 "
                    } border-black text-base font-medium mx-2 p-1  hover:text-gray-900`}
                  >
                    Tanya
                  </Link>
                </div>
                {localStorage.getItem("username") === "safira" && (
                  <div>
                    <Link
                      to="/admin"
                      onClick={() => localStorage.setItem("menu", "admin")}
                      className={`${
                        activeMenu === "admin"
                          ? "border-b-4 text-blue-1001 font-bold"
                          : "font-bold text-gray-500 "
                      } border-black text-base font-medium mx-2 p-1  hover:text-gray-900`}
                    >
                      ADMIN PAGE
                    </Link>
                  </div>
                )}
                {/* <div>
                  <Link
                    to="/lowongan"
                    onClick={() => localStorage.setItem("menu", "hub")}
                    className={`${
                      activeMenu === "hub"
                        ? "border-b-4 text-blue-1001 font-bold"
                        : "font-bold text-gray-500 "
                    } border-black text-base font-medium mx-2 p-1  hover:text-gray-900`}
                  >
                    Tentang Kami
                  </Link>
                </div> */}
              </nav>
            </div>
            <nav className="md:hidden">
              <img
                src={menuicon}
                onClick={() => {
                  setmodalmobile(!modalmobile);
                  setzindexnav("z-50");
                }}
                className="w-8 h-8"
                alt=""
              />
            </nav>
            {modalmobile && (
              <div className="absolute bg-blue-1001 bg-opacity-80 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl m-2 mt-28 mr-16 p-5 right-0 translate-y-20 space-y-3 z-50 backdrop-blur-sm">
                <div>
                  <Link
                    to="/"
                    onClick={() => localStorage.setItem("menu", "home")}
                    className=" font-bold text-white text-lg uppercase "
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    to="/survey"
                    onClick={() => localStorage.setItem("menu", "survey")}
                    className=" font-bold text-white text-lg uppercase "
                  >
                    Quiz
                  </Link>
                </div>
                <div>
                  <Link
                    to="/tanya"
                    onClick={() => localStorage.setItem("menu", "tanya")}
                    className=" font-bold text-white text-lg uppercase "
                  >
                    Tanya
                  </Link>
                </div>
                <div>
                  <Link
                    to="/lowongan"
                    onClick={() => localStorage.setItem("menu", "hub")}
                    className=" font-bold text-white text-lg uppercase "
                  >
                    Poster
                  </Link>
                </div>
                {/* <div>
                  <Link
                    to="/lowongan"
                    onClick={() => localStorage.setItem("menu", "hub")}
                    className=" font-bold text-white text-lg uppercase "
                  >
                    Tentang Kami
                  </Link>
                </div> */}
              </div>
            )}

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {!localStorage.getItem("access_token") && (
                <>
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="whitespace-nowrap text-base font-medium mx-2 p-1  hover:text-gray-900"
                  >
                    Sign in
                  </button>

                  <button
                    onClick={() => setShowModalRegister(true)}
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium mx-2 p-1 text-white bg-blue-1001 hover:bg-indigo-700"
                  >
                    Sign up
                  </button>
                </>
              )}
              {localStorage.getItem("access_token") && (
                <button
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium mx-2 p-1 text-white bg-blue-1001 hover:bg-indigo-700"
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 mx-auto w-full md:w-5/12">
              {/*content*/}
              <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Login</h3>
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
                    <p className="font-semibold py-5">
                      Login to your Glints account to continue.
                    </p>
                    <div className="flex flex-col gap-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formLogin.email}
                        onChange={handleChange}
                        aria-describedby="helper-text-explanation"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Input your email"
                      />
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formLogin.password}
                        onChange={handleChange}
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Input your Password"
                      />
                    </div>
                    <div className="py-4">
                      <a href="test">Forgot your password?</a>
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-red-1000 border border-red-1000 focus:outline-none  font-medium text-sm px-5 py-2.5 mr-2 mb-2  flex flex-row gap-2 justify-center items-center w-full h-10 shadow-5xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none ease-linear duration-100 "
                    >
                      MASUK
                    </button>
                    <p>Or Login With</p>
                    <div className="flex flex-col justify-center pt-6 lg:pt-0">
                      <div className="flex justify-center space-x-4">
                        <a
                          rel="noopener noreferrer"
                          href="test"
                          title="Instagram"
                          className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                          </svg>
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="test"
                          title="Pinterest"
                          className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            className="w-6 h-6"
                          >
                            <path d="M16.021 0c-8.828 0-15.984 7.156-15.984 15.984 0 6.771 4.214 12.552 10.161 14.88-0.141-1.266-0.266-3.203 0.052-4.583 0.292-1.25 1.875-7.943 1.875-7.943s-0.479-0.964-0.479-2.375c0-2.219 1.292-3.88 2.891-3.88 1.365 0 2.026 1.021 2.026 2.25 0 1.37-0.87 3.422-1.323 5.323-0.38 1.589 0.797 2.885 2.365 2.885 2.839 0 5.026-2.995 5.026-7.318 0-3.813-2.75-6.49-6.677-6.49-4.547 0-7.214 3.417-7.214 6.932 0 1.375 0.526 2.854 1.188 3.651 0.13 0.161 0.146 0.302 0.109 0.464-0.12 0.5-0.391 1.599-0.443 1.818-0.073 0.297-0.229 0.359-0.536 0.219-1.99-0.922-3.245-3.839-3.245-6.193 0-5.036 3.667-9.672 10.563-9.672 5.542 0 9.854 3.958 9.854 9.229 0 5.516-3.474 9.953-8.307 9.953-1.62 0-3.141-0.839-3.677-1.839l-1 3.797c-0.359 1.391-1.339 3.135-2 4.193 1.5 0.458 3.078 0.714 4.734 0.714 8.813 0 15.979-7.151 15.979-15.984 0-8.828-7.167-15.979-15.979-15.979z"></path>
                          </svg>
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="test"
                          title="Twitter"
                          className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            className="w-6 h-6"
                          >
                            <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                          </svg>
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="test"
                          title="Facebook"
                          className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            className="w-6 h-6"
                          >
                            <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                          </svg>
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="test"
                          title="Gmail"
                          className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            className="w-6 h-6"
                          >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showModalRegister ? (
        // ini tempat register
        <FormRegisterLogin
          setShowModal={setShowModalRegister}
          formType={"FormLogin"}
        />
      ) : null}
    </>
  );
};

export default NavBar;
