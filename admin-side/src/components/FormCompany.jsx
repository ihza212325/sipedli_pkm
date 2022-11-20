import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AddCompany,
  AddJob,
  EditCompany,
  EditJobs,
  fetchCompany,
  fetchJob,
} from "../store/action";
// import { RegisterAdmin } from "../store/action";

const FormCompany = ({ setShowModal, formType, company }) => {
  const [formAdd, setFormAdd] = useState({
    name: "",
    companyLogo: "",
    location: "",
    email: "",
    description: "",
  });
  const [formEdit, setFormEdit] = useState({
    name: formType === "Form Edit" ? company.name : "",
    companyLogo: formType === "Form Edit" ? company.companyLogo : "",
    location: formType === "Form Edit" ? company.location : "",
    email: formType === "Form Edit" ? company.email : "",
    description: formType === "Form Edit" ? company.description : "",
  });

  //   const { companies, error, loading } = useSelector((state) => state.company);
  const [typeForm, setTypeForm] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setTypeForm(formType);
    // dispatch(fetchCompany());
  }, []);

  const handleChangeAdd = (e) => {
    // console.log("loon");
    const name = e.target.name;
    const value = e.target.value;

    setFormAdd({
      ...formAdd,
      [name]: value,
    });
  };
  const handleChangeEdit = (e) => {
    // console.log("loon");
    const name = e.target.name;
    const value = e.target.value;

    setFormEdit({
      ...formEdit,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formAdd);
    // AddCompany
    dispatch(AddCompany(formAdd)).then(() => setShowModal(false));
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    console.log(formEdit);

    dispatch(EditCompany(formEdit, company.id)).then(() => setShowModal(false));
  };

  //   if (loading) {
  //     return <h1>loading...</h1>;
  //   }
  return (
    <>
      {/* {typeForm === "Form Add" ? ( */}
      {/* {JSON.stringify(companies)} */}
      <>
        <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative  my-6 mx-auto w-5/12">
            {/*content*/}
            <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  {formType === "Form Add" ? "ADD NEW COMPANY" : "EDIT COMPANY"}
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
                          <label className=" font-semibold">Name Company</label>
                          <input
                            type="name"
                            id="name"
                            name="name"
                            value={formAdd.name}
                            onChange={handleChangeAdd}
                            aria-describedby="helper-text-explanation"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your company name"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">Location</label>
                          <input
                            type="location"
                            id="location"
                            name="location"
                            value={formAdd.location}
                            onChange={handleChangeAdd}
                            aria-describedby="helper-text-explanation"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your company location"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">
                            Email Company
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formAdd.email}
                            onChange={handleChangeAdd}
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your email"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">Company Logo</label>
                          <input
                            type="text"
                            id="companyLogo"
                            name="companyLogo"
                            value={formAdd.companyLogo}
                            onChange={handleChangeAdd}
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your email"
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input description"
                          />
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
                  <form action="">
                    <div className="relative p-6 flex-auto">
                      <div className="flex flex-col gap-4">
                        <div>
                          <label className=" font-semibold">Name Company</label>
                          <input
                            type="name"
                            id="name"
                            name="name"
                            value={formEdit.name}
                            onChange={handleChangeEdit}
                            aria-describedby="helper-text-explanation"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your company name"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">Location</label>
                          <input
                            type="location"
                            id="location"
                            name="location"
                            value={formEdit.location}
                            onChange={handleChangeEdit}
                            aria-describedby="helper-text-explanation"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your company location"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">
                            Email Company
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formEdit.email}
                            onChange={handleChangeEdit}
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your email"
                          />
                        </div>
                        <div>
                          <label className=" font-semibold">Company Logo</label>
                          <input
                            type="text"
                            id="companyLogo"
                            name="companyLogo"
                            value={formEdit.companyLogo}
                            onChange={handleChangeEdit}
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input your email"
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input description"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        onClick={handleSubmitEdit}
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

export default FormCompany;
