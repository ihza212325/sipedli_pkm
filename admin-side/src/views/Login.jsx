import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../store/action";

// import NavBar from "../components/Navbar";
const Login = () => {
  const dispatch = useDispatch();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
    // console.log(formLogin);
    dispatch(loginAdmin(formLogin)).then(() => {
      console.log("ihzasssss");
      navigate("/home");
    });
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="flex flex-col justify-center items-center h-screen gap-10">
        <div className="border border-gray-200 shadow-lg p-6 rounded-md">
          <p className="font-bold text-3xl ">LOGIN ADMIN</p>
          <form action="" onSubmit={handleSubmit}>
            <div className="relative flex-auto">
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
