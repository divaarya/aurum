import { ShieldCheck, Layers, Headphones, BadgeCheck } from "lucide-react";
import "./Keunggulan.css";

const daftar = [
  {
    ikon: Layers,
    judul: "Satu data untuk semua divisi",
    isi: "Absensi, gaji, dan izin saling terhubung sehingga tidak ada input ganda.",
  },
  {
    ikon: ShieldCheck,
    judul: "Akses sesuai peran",
    isi: "Setiap orang hanya melihat data yang menjadi tanggung jawabnya.",
  },
  {
    ikon: BadgeCheck,
    judul: "Proses tercatat rapi",
    isi: "Setiap pengajuan dan persetujuan tersimpan sehingga mudah ditelusuri.",
  },
  {
    ikon: Headphones,
    judul: "Pendampingan implementasi",
    isi: "Tim kami mendampingi dari pengisian data sampai tim siap memakai sistem.",
  },
];

function Keunggulan() {
  return (
    <section
      className="ku"
      id="keunggulan"
      style={{ backgroundImage: "url(/tim.jpg)" }}
    >
      <div className="ku-dalam">
        <div className="ku-kepala">
          <h2 className="judul">
            Dirancang untuk standar perusahaan yang menuntut.
          </h2>
          <p>
            Aurum menjaga data tetap rapi, aman, dan mudah dikelola di setiap
            divisi.
          </p>
        </div>

        <ul className="ku-daftar">
          {daftar.map((d) => {
            const Ikon = d.ikon;
            return (
              <li key={d.judul}>
                <Ikon size={28} />
                <h3>{d.judul}</h3>
                <p>{d.isi}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Keunggulan;
