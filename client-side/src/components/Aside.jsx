const Aside = () => {
  return (
    <>
      <aside className="w-3/12 h-4/6">
        <div className="w-full max-w-md bg-white rounded-tl-lg rounded-tr-lg border shadow-md p-4 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Category Artikel
            </h5>
          </div>
        </div>
        <div className="p-4 w-full max-w-md bg-white rounded-br-lg rounded-bl-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col gap-4 border-b-2">
            <p>Tampilkan Berdasarkan</p>
            <div className="flex flex-row">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-1/2"
              >
                Light
              </button>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-1/2"
              >
                Light
              </button>
            </div>
          </div>
          {/* tipe pekerjaan */}
          <div className="flex flex-col gap-1 border-b-2">
            <p className="pt-2 pb-2">Tipe Pekerjaan</p>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Magang</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Full-Time</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Part-Time</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Freelance</label>
            </div>
          </div>
          {/* bisa kerja remote */}
        </div>
      </aside>
    </>
  );
};
export default Aside;
