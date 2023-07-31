import CardMenu from "../components/CardMenu";
import CarouselMenu from "../components/Carousel";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import quiz from "../images/3754170.jpg";
import tanya from "../images/Mesa de trabajo 1.svg";
import posterr from "../images/Artboard 2.svg";

const Home = () => {
  const array1 = [1, 4, 9, 16];
  return (
    <>
      <NavBar />
      <div className="relative bg-blue-1100 pb-72">
        <div className="w-full justify-center items-center mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="flex flex-col mt-14 text-center text-6xl font-extrabold">
            <p className="text-blue-1001 text-7xl md:text-8xl">SIPEDLI </p>{" "}
            <p>Sistem Peduli Literasi Digital</p>
          </div>
          <div className="text-center text-xl font-light">
            <p>Membuka wawasan Literasi Digitalmu !</p>
          </div>
          {/* card tanya  belajar upgrade lamar */}
          <div className="flex flex-col md:flex-row md:space-x-14 justify-center ">
            <CardMenu name={"TANYA"} image={tanya} width={40} />
            <CardMenu name={"POSTER"} image={posterr} width={52} />
            <CardMenu name={"QUIZ"} image={quiz} width={40} />
            {/* <CardMenu name={"LAMAR"} /> */}
          </div>
        </div>
      </div>
      <div className="h-full bg-blue-1001 space-y-10 rounded-t-supermobile md:rounded-t-super flex-col justify-center items-center px-7 md:px-20 py-20 -translate-y-48">
        <div className="flex justify-center ">
          <h1 className="text-4xl text-center md:text-6xl font-bold text-white">
            Indonesia Makin Cakap Digital
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-5 ">
          <div className="hover:bg-white text-white hover:text-blue-1001 w-full rounded-3xl flex-col items-center justify-center p-3 ">
            <div className="aspect-[1.5] overflow-hidden rounded-2xl lg:rounded-3xl ">
              <div className="w-full h-[174px] relative">
                <img
                  className="min-w-full min-h-full "
                  src="https://api-literasidigital.ruangalternative.com/v1/storage/2023-05/b73c5ecd-7353-4181-8752-89ee369a3776-image.jpeg?width=750&quality=75"
                  alt=""
                />
              </div>
            </div>
            <div className="p-5  space-y-4">
              <div>
                <h1 className="font-bold text-lg capitalize">
                  kemampuan digital
                </h1>
              </div>
              <div>
                <p className="text-justify">
                  Kemampuan individu dalam mengetahui, memahami, dan menggunakan
                  perangkat keras dan piranti lunak TIK serta sistem operasi
                  digital dalam kehidupan sehari-hari
                </p>
              </div>
            </div>
          </div>
          <div className="hover:bg-white text-white hover:text-blue-1001 w-full rounded-3xl flex-col items-center justify-center p-3 ">
            <div className="aspect-[1.5] overflow-hidden rounded-2xl lg:rounded-3xl ">
              <div className="w-full h-[174px] relative">
                <img
                  className="min-w-full min-h-full "
                  src="https://api-literasidigital.ruangalternative.com/v1/storage/2023-05/56aa8f99-7586-48d2-9775-d4d289f19cea-image.jpeg?width=2048&quality=75"
                  alt=""
                />
              </div>
            </div>
            <div className="p-5  space-y-4">
              <div>
                <h1 className="font-bold text-lg capitalize">
                  etika berdigital
                </h1>
              </div>
              <div>
                <p className="text-justify">
                  Kemampuan individu dalam menyadari, mencontohkan, menyesuaikan
                  diri, mempertimbangkan, dan mengembangkan tata kelola etika
                  digital (netiquette) dalam kehidupan sehari-hari
                </p>
              </div>
            </div>
          </div>
          <div className="hover:bg-white text-white hover:text-blue-1001 w-full rounded-3xl flex-col items-center justify-center p-3 ">
            <div className="aspect-[1.5] overflow-hidden rounded-2xl lg:rounded-3xl ">
              <div className="w-full h-[174px] relative">
                <img
                  className="min-w-full min-h-full "
                  src="https://api-literasidigital.ruangalternative.com/v1/storage/2023-05/df4643e9-7bd2-4006-8f8d-420d9e29bf7e-image.jpeg?width=2048&quality=75"
                  alt=""
                />
              </div>
            </div>
            <div className="p-5  space-y-4">
              <div>
                <h1 className="font-bold text-lg capitalize">
                  budaya berdgital
                </h1>
              </div>
              <div>
                <p className="text-justify">
                  Kemampuan individu dalam membaca, menguraikan, membiasakan,
                  memeriksa, dan membangun wawasan kebangsaan, nilai Pancasila
                  dan Bhinneka Tunggal Ika dalam kehidupan sehari-hari
                </p>
              </div>
            </div>
          </div>
          <div className="hover:bg-white text-white hover:text-blue-1001 w-full rounded-3xl flex-col items-center justify-center p-3 ">
            <div className="aspect-[1.5] overflow-hidden rounded-2xl lg:rounded-3xl ">
              <div className="w-full h-[174px] relative">
                <img
                  className="min-w-full min-h-full "
                  src="https://api-literasidigital.ruangalternative.com/v1/storage/2023-05/fa1b38cd-15fd-40b0-a103-cb287126ced1-image.jpeg?width=2048&quality=75"
                  alt=""
                />
              </div>
            </div>
            <div className="p-5  space-y-4">
              <div>
                <h1 className="font-bold text-lg capitalize">
                  keamanan berdigital
                </h1>
              </div>
              <div>
                <p className="text-justify">
                  Kemampuan individu dalam mengenali, mempolakan, menerapkan,
                  menganalisis, menimbang, dan meningkatkan kesadaran keamanan
                  digital dalam kehidupan sehari-hari
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row mb-10 -translate-y-48">
        <CarouselMenu />
      </div>
      {/* <div className="bg-blue-1001 h-36"></div> */}
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Home;
