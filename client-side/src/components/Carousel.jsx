import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchJob } from "../store/action";
import { Link, useNavigate } from "react-router-dom";
const CarouselMenu = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const [selectImage, setselectImage] = useState("");
  const [modalImage, setmodalImage] = useState(false);
  const navigation = useNavigate();
  const onClose = () => {
    setmodalImage(false);
    setselectImage("");
  };
  useEffect(() => {
    dispatch(fetchJob());
  }, []);

  // console.log(jobs, "poopolkkk");
  const settings = {
    className: "center",
    centerMode: true,
    // infinite: true,
    // centerPadding: "120px",
    slidesToShow: 2,
    speed: 500,
    dots: true,
    variableWidth: true,
    rows: 1,
  };
  return (
    <>
      <div className="px-0 md:px-80 py-10">
        <div className="md:text-center text-blue-1001 p-10 space-y-10 ">
          <h2 className="text-6xl font-bold">POSTER</h2>
          <div>
            <p>
              Waktunya meningkatkan kesadaran akan pentingnya literasi digital.
            </p>
            <p> Baca poster #MakinCakapDigital</p>
          </div>
          <Link
            to="/lowongan"
            onClick={() => localStorage.setItem("menu", "poster")}
          >
            <div className="flex space-x-3 md:justify-center items-baseline ">
              <div>
                <p className="text-xl mt-2 cursor-pointer font-semibold ">
                  Lihat Semua
                </p>
              </div>
              <div>
                <img
                  src="https://literasidigital.id/_next/static/media/arrow-right-primary.42f6abe1.svg"
                  alt=""
                  className="items-center justify-center justify-items-center"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="px-10">
          <Slider {...settings}>
            {jobs.map((item) => {
              return (
                <div className="m-2 hover:scale-105 w-full">
                  <img
                    className="rounded-md md:h-96 h-28"
                    src={item.url}
                    alt=""
                  />{" "}
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarouselMenu;
