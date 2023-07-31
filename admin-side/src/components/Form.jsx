import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddJob, EditJobs, fetchCompany } from "../store/action";

const Form = ({ setShowModal, formType, job }) => {
  const [formAdd, setFormAdd] = useState({
    title: "",
    description: "",
    jobType: "",
    companyId: "",
  });

  const [formEdit, setFormEdit] = useState({
    title: formType === "Form Edit" ? job.title : "",
    description: formType === "Form Edit" ? job.description : "",
    jobType: formType === "Form Edit" ? job.jobType : "",
    companyId: formType === "Form Edit" ? job.companyId : "",
  });

  const { companies, loading } = useSelector((state) => state.company);

  let initialSkill = {
    name: "",
    level: "",
  };

  const [FormSkill, setFormSkill] = useState([initialSkill]);
  const [FormSkillEdit, setFormSkillEdit] = useState(
    formType === "Form Edit"
      ? job.Skills.map((e) => {
          let obj = {
            name: e.name,
            level: e.level,
          };
          return obj;
        })
      : ""
  );
  const dispatch = useDispatch();

  const HandleSkill = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const value = e.target.value;

    const nextArr = FormSkill.map((el, i) => {
      if (i === +id) {
        return {
          ...FormSkill[id],
          [name]: value,
        };
      } else {
        return el;
      }
    });
    setFormSkill(nextArr);
  };

  const HandleSkillEdit = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const value = e.target.value;
    const nextArr = FormSkillEdit.map((el, i) => {
      if (i === +id) {
        console.log("lom");
        return {
          ...FormSkillEdit[id],
          [name]: value,
        };
      } else {
        return el;
      }
    });
    setFormSkillEdit(nextArr);
  };

  useEffect(() => {
    dispatch(fetchCompany());
  }, []);

  const handleAddFormSkill = (e) => {
    e.preventDefault();
    setFormSkill([...FormSkill, initialSkill]);
  };

  const handleAddFormSkillEdit = (e) => {
    console.log(FormSkillEdit);
    e.preventDefault();
    setFormSkillEdit([
      ...FormSkillEdit,
      {
        name: "",
        level: "choose level",
      },
    ]);
  };

  const handleChangeAdd = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormAdd({
      ...formAdd,
      [name]: value,
    });
  };

  const handleChangeEdit = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormEdit({
      ...formEdit,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddJob(formAdd, FormSkill)).then((data) => {
      if (data === "error") {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    });
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(EditJobs(formEdit, FormSkillEdit, job.id)).then((data) => {
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
      <>
        <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative  my-6 mx-auto w-5/12">
            {/*content*/}
            <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  {formType === "Form Add" ? "ADD NEW JOB" : "EDIT JOB"}
                </h3>
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
              {formType === "Form Add" ? (
                <>
                  <form action="">
                    <div className="relative p-6 flex-auto">
                      <div className="flex flex-col gap-4">
                        <div>
                          <label className=" font-semibold">Title</label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            value={formAdd.title}
                            onChange={handleChangeAdd}
                            aria-describedby="helper-text-explanation"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your title"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">Description</label>
                          <input
                            type="description"
                            id="description"
                            name="description"
                            value={formAdd.description}
                            onChange={handleChangeAdd}
                            aria-describedby="helper-text-explanation"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your description"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">Job Type</label>
                          <input
                            type="jobType"
                            id="jobType"
                            name="jobType"
                            value={formAdd.jobType}
                            onChange={handleChangeAdd}
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your jobType"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">Company</label>
                          <div class="mb-3 w-full">
                            <select
                              name="company"
                              value={formAdd.companyId}
                              onChange={handleChangeAdd}
                              id="countries"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Choose a company</option>
                              {companies.map((company) => {
                                return (
                                  <option value={company.id}>
                                    {company.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          {FormSkill.map((e, index) => {
                            return (
                              <div className="flex flex-row space-x-4">
                                <div className="w-1/2">
                                  <label htmlFor="">Skill</label>

                                  <input
                                    type="text"
                                    id={index}
                                    name="name"
                                    value={FormSkill[index].skill}
                                    onChange={HandleSkill}
                                    aria-describedby="helper-text-explanation"
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Input your company"
                                  />
                                </div>
                                <div className="w-1/2">
                                  <label htmlFor="">Level</label>

                                  <div class="mb-3 w-full">
                                    <select
                                      name="level"
                                      value={FormSkill[index].level}
                                      onChange={HandleSkill}
                                      id={index}
                                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                      <option selected>Choose a company</option>
                                      <option value="Beginner">Beginner</option>
                                      <option value="Intermediet">
                                        Intermediet
                                      </option>
                                      <option value="Expert">Expert</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          <button onClick={handleAddFormSkill}>
                            Add Skill
                          </button>
                        </div>
                      </div>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="mt-5 text-white bg-red-1000 border border-red-1000 focus:outline-none  font-medium text-sm px-5 py-2.5 mr-2 mb-2  flex flex-row gap-2 justify-center items-center w-full h-10 shadow-5xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none ease-linear duration-100 "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </>
              ) : null}
              {formType === "Form Edit" ? (
                <>
                  {/* {JSON.stringify(job)} */}
                  <form action="">
                    <div className="relative p-6 flex-auto">
                      <div className="flex flex-col gap-4">
                        <div>
                          <label className=" font-semibold">Title</label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            value={formEdit.title}
                            onChange={handleChangeEdit}
                            aria-describedby="helper-text-explanation"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your title"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">Description</label>
                          <input
                            type="description"
                            id="description"
                            name="description"
                            value={formEdit.description}
                            onChange={handleChangeEdit}
                            aria-describedby="helper-text-explanation"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your description"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">Job Type</label>
                          <input
                            type="jobType"
                            id="jobType"
                            name="jobType"
                            value={formEdit.jobType}
                            onChange={handleChangeEdit}
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your jobType"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">Company</label>
                          <div class="mb-3 w-full">
                            <select
                              name="company"
                              value={formEdit.companyId}
                              onChange={handleChangeEdit}
                              id="countries"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Choose a company</option>
                              {companies.map((company) => {
                                return (
                                  <option value={company.id}>
                                    {company.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          {FormSkillEdit.map((e, index) => {
                            return (
                              <div className="flex flex-row space-x-4">
                                <div className="w-1/2">
                                  <label htmlFor="">Skill</label>

                                  <input
                                    type="text"
                                    id={index}
                                    name="name"
                                    value={FormSkillEdit[index].name}
                                    onChange={HandleSkillEdit}
                                    aria-describedby="helper-text-explanation"
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Input your company"
                                  />
                                </div>
                                <div className="w-1/2">
                                  <label htmlFor="">Level</label>

                                  <div class="mb-3 w-full">
                                    <select
                                      name="level"
                                      value={FormSkillEdit[index].level}
                                      onChange={HandleSkillEdit}
                                      id={index}
                                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                      <option selected>
                                        {FormSkillEdit[index].level}
                                      </option>
                                      <option value="Beginner">Beginner</option>
                                      <option value="Intermediet">
                                        Intermediet
                                      </option>
                                      <option value="Expert">Expert</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          <button onClick={handleAddFormSkillEdit}>
                            Add Skill
                          </button>
                        </div>
                      </div>
                      <button
                        type="submit"
                        onClick={handleEditSubmit}
                        className="mt-5 text-white bg-red-1000 border border-red-1000 focus:outline-none  font-medium text-sm px-5 py-2.5 mr-2 mb-2  flex flex-row gap-2 justify-center items-center w-full h-10 shadow-5xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none ease-linear duration-100 "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
      {/* ) : null} */}
    </>
  );
};

export default Form;
