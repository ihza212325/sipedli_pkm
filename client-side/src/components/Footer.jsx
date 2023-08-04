import logo from "../images/fi2.png";
import tiktok from "../images/pngwing.com.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-blue-1001 flex flex-col-reverse md:flex-row p-16">
        {/* kiri */}
        <div className="text-white w-full  md:w-1/2 pr-10 space-y-5">
          {/* <img className="w-32" src="" alt="" /> */}
          {/* <img src={logo} className="w-72" alt="" /> */}
          <p className="font-bold text-lg">SIEDI</p>
          <p className="font-light text-md text-justify">
            Selamat datang di SIEDI, Sistem Informasi Digital Literasi yang
            memberikan akses mudah dan terpercaya untuk meningkatkan pengetahuan
            dan keterampilan digital Anda. Kami berkomitmen untuk mendukung
            perkembangan literasi digital di era teknologi modern ini. Temukan
            berbagai sumber daya, pelatihan, dan konten informatif yang
            dirancang untuk membantu Anda memahami dan menguasai dunia digital.
          </p>
          <img src="image.png" alt="" />
          {/* <p>© PKM PM - STMIK DCI</p> */}
        </div>
        {/* kanan */}
        <div className="text-white flex-col justify-center w-full md:w-1/2 space-y-7 items-center ">
          <div className="text-center">
            <p className="text-3xl font-bold">Media Sosial</p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div>
              <ul className="flex flex-col cursor-pointer mr-12">
                <li>
                  <img
                    className="w-32 md:w-12"
                    src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col cursor-pointer ">
                <li>
                  <img
                    className="w-20 md:w-10"
                    src="https://fh.unwir.ac.id/wp-content/uploads/2018/03/instagram-logo-png-transparent-background-hd-3.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col cursor-pointer ">
                <img
                  className="w-60 md:w-40"
                  src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
                  alt=""
                />
              </ul>
            </div>
            <div>
              <ul className="flex flex-col cursor-pointer ">
                <img className="w-16 md:w-10" src={tiktok} alt="" />{" "}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
