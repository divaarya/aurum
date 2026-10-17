"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import "./Testimoni.css";

const daftar = [
  {
    isi: "Aurum membuat proses HR di cabang-cabang kami seragam. Laporan kehadiran dan gaji kini bisa dipantau pusat tanpa menunggu rekap manual.",
    nama: "Hendra Wibowo",
    jabatan: "Direktur Operasional, Grup Distribusi Kencana",
  },
  {
    isi: "Hak akses per divisi sangat membantu. Data gaji hanya dilihat yang berwenang, dan persetujuan cuti jauh lebih tertib.",
    nama: "Larasati Hadi",
    jabatan: "Kepala HR, PT Mitra Konstruksi Utama",
  },
  {
    isi: "Materi pelatihan dan ujian ada dalam satu platform, sehingga evaluasi karyawan baru menjadi lebih terukur.",
    nama: "Bambang Susilo",
    jabatan: "General Manager, Hotel Puri Sentosa",
  },
];

function Testimoni() {
  const [i, setI] = useState(0);
  const t = daftar[i];

  const sebelumnya = () => setI((i - 1 + daftar.length) % daftar.length);
  const berikutnya = () => setI((i + 1) % daftar.length);

  return (
    <section className="ts" id="testimoni">
      <div className="ts-dalam">
        <h2 className="judul">Dipercaya oleh tim HR perusahaan.</h2>

        <Quote size={44} className="ts-kutip" />
        <blockquote>{t.isi}</blockquote>
        <p className="ts-nama">
          <b>{t.nama}</b>
          <span>{t.jabatan}</span>
        </p>

        <div className="ts-kontrol">
          <button onClick={sebelumnya} aria-label="Testimoni sebelumnya">
            <ChevronLeft size={22} />
          </button>
          <span>
            {i + 1} / {daftar.length}
          </span>
          <button onClick={berikutnya} aria-label="Testimoni berikutnya">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
