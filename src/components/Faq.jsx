"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./Faq.css";

const daftar = [
  {
    tanya: "Apakah Aurum cocok untuk perusahaan dengan banyak divisi?",
    jawab:
      "Ya. Hak akses diatur per peran dan divisi, sehingga setiap tim hanya melihat data yang menjadi tanggung jawabnya.",
  },
  {
    tanya: "Apakah tersedia paket gratis?",
    jawab:
      "Tersedia. Paket Esensial gratis untuk tim sampai 15 karyawan, sudah termasuk absensi, perizinan, dan library dokumen.",
  },
  {
    tanya: "Apakah penggajian terhubung dengan absensi?",
    jawab:
      "Ya. Kehadiran, lembur, dan izin masuk otomatis ke perhitungan gaji sehingga tidak perlu dihitung ulang.",
  },
  {
    tanya: "Bisakah Exam dan Library dipakai untuk pelatihan internal?",
    jawab:
      "Bisa. Simpan materi di Library, lalu ukur pemahaman karyawan lewat Exam dan lihat hasilnya per orang.",
  },
  {
    tanya: "Bagaimana proses implementasinya?",
    jawab:
      "Tim kami mendampingi mulai dari pemetaan kebutuhan, pengisian data, sampai tim siap memakai sistem.",
  },
];

function Faq() {
  const [buka, setBuka] = useState(0);

  return (
    <section className="fq" id="faq">
      <h2 className="judul">Pertanyaan yang sering diajukan.</h2>

      <div className="fq-daftar">
        {daftar.map((d, i) => (
          <div
            className={buka === i ? "fq-baris buka" : "fq-baris"}
            key={d.tanya}
          >
            <button
              className="fq-tanya"
              onClick={() => setBuka(buka === i ? -1 : i)}
              aria-expanded={buka === i}
            >
              <span className="fq-no">0{i + 1}</span>
              <span className="fq-teks">{d.tanya}</span>
              {buka === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {buka === i && <p className="fq-jawab">{d.jawab}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
