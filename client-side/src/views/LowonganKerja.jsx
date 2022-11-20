import Aside from "../components/Aside";
import CardJob from "../components/CardJob";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import NavBar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchJob } from "../store/action";
const LowonganKerja = () => {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  useEffect(() => {
    // setLoading(true);
    dispatch(fetchJob());
  }, []);

  if (loading) {
    return <h1>loading....</h1>;
  }
  // console.log(jobs);
  return (
    <>
      <div className="relative">
        <div className="w-11/12 mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center border-gray-100 py-5 md:justify-start md:space-x-10 w-full">
            {/* kiri logo dan menu */}
            <div className="mb-6 w-full">
              {/* search */}
              <div className="flex flex-row space-x-7">
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2"
                  placeholder="Cari Lowongan"
                />
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Lokasi"
                />
                <a
                  href="test"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-1000 hover:bg-indigo-700 w-40"
                >
                  Cari
                </a>
              </div>
              <div className="py-8 font-bold">
                <p>2021 lowongan kerja di Indonesia</p>
              </div>
              {/* main page */}
              <div className="w-full flex flex-row">
                {/* aside */}
                <Aside />
                <div className="w-9/12 flex flex-row flex-wrap h-44 gap-10 justify-end">
                  {/* card Job */}
                  {jobs.map((job) => {
                    return <CardJob key={job.id} job={job} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LowonganKerja;
