import {
  Fingerprint,
  Wallet,
  GraduationCap,
  Library,
  CalendarCheck,
} from "lucide-react";
import "./Fitur.css";

const romawi = ["I", "II", "III", "IV", "V"];

const daftar = [
  {
    ikon: Fingerprint,
    nama: "Absensi",
    isi: "Pantau kehadiran dan jam kerja seluruh tim dalam satu sistem, lengkap dengan lokasi dan jadwal shift.",
    poin: ["Lokasi dan selfie", "Rekap lembur"],
  },
  {
    ikon: Wallet,
    nama: "Gaji",
    isi: "Bantu HR mengelola informasi penggajian secara terstruktur, dari komponen gaji sampai slip digital.",
    poin: ["Komponen gaji", "Slip gaji digital"],
  },
  {
    ikon: GraduationCap,
    nama: "Exam",
    isi: "Buat dan kelola evaluasi kemampuan karyawan untuk pelatihan dan seleksi internal.",
    poin: ["Bank soal", "Riwayat nilai"],
  },
  {
    ikon: Library,
    nama: "Library",
    isi: "Simpan dan akses dokumen serta materi perusahaan dengan hak akses sesuai divisi.",
    poin: ["SOP dan kebijakan", "Akses per divisi"],
  },
  {
    ikon: CalendarCheck,
    nama: "Perizinan",
    isi: "Kelola pengajuan izin dan cuti dengan alur persetujuan yang sederhana dan tercatat.",
    poin: ["Persetujuan mudah", "Sisa cuti otomatis"],
  },
];

function Fitur() {
  return (
    <section className="fi" id="fitur">
      <div className="fi-kepala">
        <h2 className="judul">Lima modul. Satu platform yang tertata.</h2>
        <p>
          Setiap modul dapat digunakan terpisah maupun bersama, sesuai tahap
          kebutuhan perusahaan Anda.
        </p>
      </div>

      <div className="fi-lebar">
        <div className="fi-tiang">
          {daftar.map((d, i) => {
            const Ikon = d.ikon;
            return (
              <article className="fi-item" key={d.nama}>
                <div className="fi-atas">
                  <span className="fi-romawi">{romawi[i]}</span>
                  <Ikon size={26} className="fi-ikon" />
                </div>
                <h3>{d.nama}</h3>
                <p>{d.isi}</p>
                <ul>
                  {d.poin.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Fitur;
