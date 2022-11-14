import CardMenu from "../components/CardMenu";

const Home = () => {
  return (
    <>
      {/* kuning atas */}
      <div className="relative bg-yellow-1000">
        <div className="w-11/12 mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center border-gray-100 py-5 md:justify-start md:space-x-10 w-full">
            {/* kiri logo dan menu */}
            <div className="mb-6 w-full">
              <div className="text-center font-semibold text-2xl mb-10 mt-5">
                <p>
                  Jelajahi <span className="font-extrabold">5000+</span>
                  pekerjaan baru setiap bulan!
                </p>
              </div>
              <div className="flex flex-row space-x-7">
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2"
                  placeholder="Cari Lowongan"
                />
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Lokasi"
                />
                <a
                  href="test"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-1000 hover:bg-indigo-700 w-40"
                >
                  Cari
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slide awal */}
      <div className="relative bg-blue-1100 mb-20">
        <div className="w-11/12 mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className=" mt-14 text-center text-6xl font-extrabold">
            <p>
              TEMPAT PENGEMBANGAN <br /> KARIER TERBAIK <br />
              UNTUKMU
            </p>
          </div>
          <div className=" text-center text-xl font-light">
            <p>
              Buat keputusan terbaik untuk kariermu dan <br />
              bangun karier impianmu!
            </p>
          </div>
          {/* card tanya  belajar upgrade lamar */}
          <div className="flex flex-row space-x-14 justify-center ">
            <CardMenu name={"TANYA"} />
            <CardMenu name={"BELAJAR"} />
            <CardMenu name={"UPGRADE"} />
            <CardMenu name={"LAMAR"} />
          </div>
        </div>
      </div>
      <footer className="bg-black flex flex-row p-16">
        {/* kiri */}
        <div className="text-white w-1/2 pr-10">
          <img
            className="w-32"
            src="https://employers.glints.id/images/logo-dark.png"
            alt=""
          />
          <p>Glints Asia Pacific</p>
          <img src="" alt="" />
          <p className="font-light text-sm text-justify">
            Glints adalah ekosistem talenta terdepan di kawasan Asia Tenggara.
            Misi kami adalah mewujudkan 120 juta profesional di kawasan untuk
            terus mengembangkan karirnya dan memberdayakan organisasi sehingga
            dapat menemukan kandidat yang tepat dari penjuru Asia Tenggara.
            Secara resmi berdiri di Singapura pada tahun 2015 di Singapura,
            Glints telah memberdayakan lebih dari 3 juta talenta dan 50.000
            organisasi untuk mewujudkan potensi terbaiknya. Hari ini, kami
            berada di garis depan pemberdayaan kandidat sebagai startup dengan
            pertumbuhan tercepat khususnya kategori pengembangan karir dan
            rekrutmen. Saat ini, Glints beroperasi di Indonesia, Malaysia,
            Singapura, Vietnam Filipina dan Taiwan.
          </p>
          <img src="image.png" alt="" />
          <p>© 2022 PT. Glints Indonesia Group</p>
        </div>
        {/* kanan */}
        <div className="text-white flex flex-row w-1/2 space-x-32">
          <div>
            <ul className="flex flex-col gap-3">
              <li>PERSAHAAN</li>
              <li>About Us</li>
              <li>Tim Kami</li>
              <li>Inside Glints</li>
              <li>Tech Blog</li>
              <li>Careers</li>
              <li>Report Vulnerability</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li>TEMUKAN LOWONGAN BERDASARKAN</li>
              <li>Help Center</li>
              <li>Lokasi Pekerjaan</li>
              <li>Nama Perusahaan</li>
              <li>Kategori Pekerjaan</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li>BUSINESS SOLUTIONS</li>
              <li>For Employers</li>
              <li>HR Tips</li>
              <li>Glints Platform</li>
              <li>TalentHunt</li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </footer>
    </>
  );
};

export default Home;
