const Aside = () => {
  return (
    <>
      <aside className="w-3/12 h-4/6">
        <div className="w-full max-w-md bg-white rounded-tl-lg rounded-tr-lg border shadow-md p-4 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Filter Pencarianmu
            </h5>
          </div>
        </div>
        <div className="p-4 w-full max-w-md bg-white rounded-br-lg rounded-bl-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col gap-4 border-b-2">
            <p>Tampilkan Berdasarkan</p>
            <div className="flex flex-row">
              <button
                type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-1/2"
              >
                Light
              </button>
              <button
                type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-1/2"
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
          <div className="p-1 border-b-2 pt-5 pb-4">
            <label
              className="inline-flex relative items-center mr-5 cursor-pointer"
              for="green-toggle"
            >
              <input
                type="checkbox"
                value=""
                id="green-toggle"
                className="sr-only peer"
                checked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Bisa kerja remote
              </span>
            </label>
          </div>
          {/* kota */}
          <div className="flex flex-col gap-1 border-b-2">
            <p className="pt-2 pb-2">Kota</p>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Jakarta-Indonesia</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Bandung-Indonesia</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Yogyakarta-Indonesia</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Tangerang-Indonesia</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Surabaya-Indonesia</label>
            </div>
          </div>
          {/* pengalaman */}
          <div className="flex flex-col gap-1 border-b-2">
            <p className="pt-2 pb-2">Pengalaman</p>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Kurang dari setahun</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> 1-3 tahun</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> 3-5 tahun</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> 5-10 tahun</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Lebih dari 10 tahun</label>
            </div>
          </div>
          {/* selain pekerjaan tanpa pengalaman */}
          <div className="p-1 border-b-2 pt-5 pb-4">
            <label
              className="inline-flex relative items-center mr-5 cursor-pointer"
              for="green-toggle"
            >
              <input
                type="checkbox"
                value=""
                id="green-toggle"
                className="sr-only peer"
                checked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                selain pekerjaan <br /> tanpa pengalaman
              </span>
            </label>
          </div>
          {/* Katergory Pekerjaan */}
          <div className="flex flex-col gap-1 border-b-2">
            <p className="pt-2 pb-2">Kategori pekerjaan</p>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Bussiness Development/Sales</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Marketing</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Software Engineering</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Desain</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Lainnya</label>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
export default Aside;
