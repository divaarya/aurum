import "./Hero.css";

const statistik = [
  ["5", "modul HR terpadu"],
  ["1", "dashboard untuk seluruh tim"],
  ["24/7", "akses dari ponsel dan komputer"],
  ["100%", "akses diatur per peran"],
];

function Hero({ site }) {
  return (
    <section className="hr">
      <div className="hr-dalam">
        <div className="hr-teks">
          <p className="hr-garis">Platform HR untuk perusahaan</p>

          <h1>{site.heroJudul}</h1>
          <p className="hr-desc">{site.heroDeskripsi}</p>

          <div className="hr-aksi">
            <a href="#kontak" className="tombol emas">
              {site.ctaTeks}
            </a>
            <a href="#fitur" className="tombol garis-terang">
              Lihat modul
            </a>
          </div>
        </div>

        <div className="hr-bingkai">
          <div
            className="hr-foto"
            style={{ backgroundImage: "url(/hero.jpg)" }}
          />
        </div>
      </div>

      <div className="hr-bawah">
        <ul className="hr-statistik">
          {statistik.map(([angka, ket]) => (
            <li key={ket}>
              <b>{angka}</b>
              <span>{ket}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;