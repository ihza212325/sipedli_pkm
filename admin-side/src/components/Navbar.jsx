import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Swalert } from "../store/action";
// import Swal from "sweetalert2";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleLogOut = () => {
    localStorage.clear();
    // Swal.fire("Any fool can use a computer");
    navigate("/");
    dispatch(Swalert("error", "Berhasil Logout"));
  };
  return (
    <>
      <nav
        id="navbar"
        class="flex w-full sticky bg-white top-1 drop-shadow-xl p-2 justify-between"
      >
        <div class="ml-4 flex flex-row">
          <img
            class="w-20"
            src="https://images.glints.com/unsafe/106x0/glints-dashboard.s3.amazonaws.com/images/logo.png"
            alt=""
          />
          <p class="flex items-center font-bold ml-5">Glints Admin Panel</p>
        </div>
        <ul class="flex flex-row items-center">
          <li>
            <a
              href="test"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">
                <span class="text-green-600 font-bold">
                  Hai,{localStorage.getItem("username")}
                </span>
              </span>
            </a>
          </li>
          <li>
            <button
              onClick={HandleLogOut}
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">LogOut</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
