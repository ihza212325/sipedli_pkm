const Dashboard = () => {
  return (
    <>
      <section id="dashboard" class="p-8">
        <h1 class="font-bold leading-tight text-3xl mt-0 mb-2 text-red-netflix font-sans">
          DASHBOARD
        </h1>

        <div class="flex flex-row mb-4 gap-20 flex-wrap">
          <div class="flex justify-center mt-4">
            <div class="block p-6 w-44 rounded-lg shadow-lg bg-white max-w-sm hover:drop-shadow-xl ease-out duration-300">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">
                Movies
              </h5>
              <p class="text-gray-700 font-bold mb-4 text-center text-4xl">3</p>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="block p-6 w-44 rounded-lg shadow-lg bg-white max-w-sm hover:drop-shadow-xl ease-out duration-300">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">
                Categories
              </h5>
              <p class="text-gray-700 font-bold mb-4 text-center text-4xl">5</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
