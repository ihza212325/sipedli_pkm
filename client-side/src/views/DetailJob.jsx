import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Aside from "../components/Aside";
// import CardJob from "../components/CardJob";
import Footer from "../components/Footer";
import { fetchDetailJob } from "../store/action";

const DetailJob = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { job, company, skills, loading } = useSelector((state) => state.jobs);
  useEffect(() => {
    dispatch(fetchDetailJob(id));
  }, []);

  if (loading) {
    return <h1>loading....</h1>;
  }
  return (
    <>
      {/* {JSON.stringify(job)} */}
      <div className="relative mb-52">
        <div className="w-11/12 mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center border-gray-100 py-5 md:justify-start md:space-x-10 w-full">
            {/* kiri card dan menu */}
            <div className="mb-6 w-full">
              {/* main page */}
              <div className="w-full flex flex-row">
                {/*  */}
                <div className="w-9/12 flex flex-row flex-wrap h-44 gap-10 justify-start  ">
                  {/* card Job */}
                  <div className=" w-11/12 bg-white ">
                    {/* isi head 1 */}
                    <div className="flex flex-row border-b-2 pb-10">
                      <img
                        src={company.companyLogo}
                        alt=""
                        className="w-20 h-20"
                      />
                      <div className="px-5">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {job.title}
                        </h5>
                        <a href="test">
                          <p className="mb-2 text-base tracking-tight text-gray-900 dark:text-white">
                            {company.name}
                          </p>
                        </a>
                        {/* body Card */}
                        <div className=" flex flex-col gap-1 pb-7">
                          <div className="flex flex-row space-x-3">
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <p>{company.location}</p>
                          </div>
                          <div className="flex flex-row space-x-3">
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <p>Perusahaan tidak menampilkan gaji</p>
                          </div>
                          <div className="flex flex-row space-x-3">
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                              ></path>
                              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                            </svg>
                            <p>1-3 tahun</p>
                          </div>
                        </div>
                        {/* bottom card */}
                        <div className="flex flex-row justify-start">
                          <button
                            type="button"
                            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex flex-row gap-2 justify-center items-center"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                              <path
                                fill-rule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <p className="text-xs">{job.jobType}</p>
                          </button>
                        </div>
                        <button
                          type="button"
                          className="text-whitefont-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex flex-row gap-2 justify-center items-center"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <p className="text-xs">
                            Tayang 18 hari yang lalu * Diperbarui kemarin
                          </p>
                        </button>
                        <div className="flex flex-row gap-5">
                          <button
                            type="button"
                            class="py-2 px-6 text-base font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            LAMAR CEPAT
                          </button>
                          <button
                            type="button"
                            class="py-2 px-6 text-base font-medium text-center text-blue-600 bg-white border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex flex-row gap-3"
                          >
                            <svg
                              class="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                            </svg>
                            TANDAI
                          </button>
                          <button
                            type="button"
                            class="py-2 px-6 text-base font-medium text-center text-blue-600 bg-white hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex flex-row gap-3"
                          >
                            <svg
                              class="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                            </svg>
                            BAGIKAN
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* head 2 */}
                    <div className=" border-b-2 pb-4">
                      <p className="py-5 font-bold text-lg">Skills Wajib</p>
                      <div>
                        {skills.map((e) => {
                          return (
                            <button
                              type="button"
                              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                              {e.name}-{e.level}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {/* head 2 */}
                    <div className="mb-14">
                      <p className="py-5 font-bold text-lg">
                        Deskripsi pekerjaan {company.name}
                      </p>
                      <div>
                        <p className="font-semibold">Job description </p>
                        <ul className="list-disc">
                          <li>{job.description}</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Job Requirement </p>
                        <ul className="list-disc">
                          <li>
                            Handle end to end recruitment process from candidate
                            source until onboarding process.
                          </li>
                          <li>
                            Coordinate pre-employment test schedules and conduct
                            applicant preliminary interviews.
                          </li>
                          <li>
                            Coordinate pre-employment test schedules and conduct
                            applicant preliminary interviews.
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* tentang peruhsaan */}
                    <div>
                      <div className="p-4 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                        <p className="font-bold py-4">Tentang Perusahaan</p>
                        {/* heading Card */}
                        <div className="flex flex-row space-x-10">
                          <img
                            src={company.companyLogo}
                            alt=""
                            className="w-20 h-20"
                          />
                          <div>
                            <p class="mb-2 text-base tracking-tight text-gray-900 dark:text-white">
                              {company.name}
                            </p>
                            <p class="mb-2 text-base tracking-tight text-gray-900 dark:text-white">
                              {company.email}
                            </p>
                            <img
                              src="https://www.pngitem.com/pimgs/m/21-210106_100-linkedin-logo-latest-logo-icon-gif-linkedin.png"
                              alt=""
                              className="w-10"
                            />
                          </div>
                        </div>
                        {/* body Card */}
                        <div className=" flex flex-col gap-5 mt-10 pb-7">
                          <div>
                            <p className="font-bold">Vision :</p>
                            <p>{company.description}</p>
                          </div>
                          <div>
                            <p className="font-bold">Mission :</p>
                            <p>
                              Empower communities to be knowledgable and improve
                              their financial literacies Create lasting
                              beneficial impact for the people and societies in
                              our fields through financial technologies
                            </p>
                          </div>
                          <div>
                            <p className="font-bold">Alamat Kantor :</p>
                            <p>{company.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* aside */}
                <Aside />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p>dasdsa</p> */}
      {/* <Footer /> */}
    </>
  );
};
export default DetailJob;
