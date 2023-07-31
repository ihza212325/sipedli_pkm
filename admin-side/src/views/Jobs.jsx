import { useEffect, useState } from "react";
import { TableRowJobs } from "../components/TableRowJobs";
import { useSelector, useDispatch } from "react-redux";
import { fetchJob } from "../store/action";
import Form from "../components/Form";

const Job = () => {
  const { jobs, loading } = useSelector((state) => state.jobs);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJob());
  }, []);

  if (loading) {
    return <h1>loading....</h1>;
  }
  return (
    <>
      {/* {JSON.stringify(skills)} */}
      <section id="movies" class="flex flex-col w-11/12">
        <h1 class="font-bold leading-tight text-3xl mt-0 mb-2 text-red-netflix p-8">
          Job
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="w-40 rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 p-8 hover:bg-gray-900 hover:text-gray-100 duration-300 flex flex-row gap-2 m-8 place-self-end"
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
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Add Job
        </button>

        <table class="w-auto overflow-x-scroll divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                No
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Title
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Description
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Author
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Company
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Skills
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {/* <TableMovie /> */}
            {jobs.map((job, index) => {
              return (
                <TableRowJobs
                  key={job.id}
                  index={index}
                  job={job}
                  skill={job.Skills}
                />
              );
            })}
          </tbody>
        </table>
      </section>
      {showModal ? (
        <>
          <Form setShowModal={setShowModal} formType={"Form Add"} />
        </>
      ) : null}
    </>
  );
};

export default Job;
