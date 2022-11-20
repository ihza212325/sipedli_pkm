import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { DeleteJob, EditJobs, fetchJob, fetchSkill } from "../store/action";
import Form from "./Form";
export const TableRowJobs = ({ index, job, skill }) => {
  // const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleDelete = (e) => {
    e.preventDefault();
    // console.log(job.id);
    dispatch(DeleteJob(job.id));
  };

  return (
    <>
      {/* {JSON.stringify(skill)} */}
      <tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">{index + 1}</div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-wrap">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">{job.title}</div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">
            <div class="text-sm font-medium text-gray-900">
              {job.description}
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm font-medium text-gray-900">
            {job.User.username}
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">
              {job.Company.name}
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">{/*  */}</div>
            <div className="flex flex-col">
              {skill.map((e) => {
                return <li>{e.name}</li>;
              })}
            </div>
            {/* <h1>lond</h1> */}
          </div>
        </td>
        <td class="px-6 space-x-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <button
            onClick={() => setShowModal(true)}
            class="text-indigo-600 hover:text-indigo-900"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
          </button>
          <button
            onClick={handleDelete}
            class="text-red-600  hover:text-indigo-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </td>
      </tr>
      {showModal ? (
        <>
          <Form setShowModal={setShowModal} formType={"Form Edit"} job={job} />
        </>
      ) : null}
    </>
  );
};
