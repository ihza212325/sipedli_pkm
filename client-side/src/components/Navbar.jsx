const NavBar = () => {
  return (
    <>
      <div className="relative bg-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-5 md:justify-start md:space-x-10">
            {/* kiri logo dan menu */}
            <div className="flex justify-start lg:w-0 lg:flex-1 space-x-10">
              <a href="test">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://images.glints.com/unsafe/106x0/glints-dashboard.s3.amazonaws.com/images/logo.png"
                  alt=""
                />
              </a>
              <nav className="hidden md:flex space-x-10">
                <a
                  href="test"
                  className="border-b-2 border-black text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  LOWONGAN KERJA
                </a>
                <a
                  href="test"
                  className="border-b-2 border-black text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  PERUSAHAAN
                </a>
              </nav>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="test"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="test"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
