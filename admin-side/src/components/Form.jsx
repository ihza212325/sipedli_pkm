const Form = () => {
  return (
    <section id="form-add-movie" class="w-full">
      <div class="flex gap-56 p-6 mt-12 rounded-lg bg-white justify-center">
        <form>
          <h1 class="font-bold leading-tight text-3xl mt-0 mb-2 text-red-netflix font-sans">
            Add Job
          </h1>
          <div class="form-group mb-6">
            <label for="" class="form-label inline-block mb-2 text-gray-700">
              title
            </label>
            <input
              type="Title"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id=""
              aria-describedby="Title"
              placeholder="Enter Title"
            />
          </div>
          <div class="form-group mb-6">
            <label for="" class="form-label inline-block mb-2 text-gray-700">
              company
            </label>

            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled hidden value="">
                --select company--
              </option>
              <option>bts</option>
              <option>kts</option>
            </select>
          </div>
          <div class="form-group mb-6">
            <label for="" class="form-label inline-block mb-2 text-gray-700">
              description
            </label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id=""
              placeholder="Synopsis"
            />
          </div>
          <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
