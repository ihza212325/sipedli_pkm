const Footer = () => {
  return (
    <>
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

export default Footer;
