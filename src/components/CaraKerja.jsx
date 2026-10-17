import "./CaraKerja.css";

const langkah = [
  {
    judul: "Konsultasi kebutuhan",
    isi: "Kami memetakan struktur perusahaan, jumlah karyawan, dan proses HR yang berjalan saat ini.",
  },
  {
    judul: "Pengaturan sistem",
    isi: "Jam kerja, komponen gaji, jenis cuti, dan hak akses diatur sesuai kebijakan perusahaan.",
  },
  {
    judul: "Migrasi dan pelatihan",
    isi: "Data karyawan dimasukkan, lalu tim HR dan karyawan dilatih memakai sistem.",
  },
  {
    judul: "Operasional berjalan",
    isi: "Seluruh modul aktif dan dipantau dari satu dashboard, dengan pendampingan berkelanjutan.",
  },
];

function CaraKerja() {
  return (
    <section className="ck" id="cara-kerja">
      <div className="ck-dalam">
        <div className="ck-kiri">
          <h2 className="judul">
            Implementasi yang terarah, dalam empat tahap.
          </h2>
          <p>
            Dari konsultasi pertama sampai tim siap bekerja, setiap tahap
            dipandu agar perubahan berjalan tanpa mengganggu operasional.
          </p>
          <a href="#kontak" className="tombol">
            Mulai konsultasi
          </a>
        </div>

        <ol className="ck-garis">
          {langkah.map((l, i) => (
            <li key={l.judul}>
              <span className="ck-titik">{i + 1}</span>
              <div>
                <h3>{l.judul}</h3>
                <p>{l.isi}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default CaraKerja;
