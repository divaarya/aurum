"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import "./Harga.css";

// bulanan / tahunan bernilai null berarti harga sesuai kebutuhan
const paket = [
  {
    nama: "Esensial",
    bulanan: 0,
    tahunan: 0,
    catatan: "Untuk tim sampai 15 karyawan",
    tombol: "Pilih Esensial",
    fitur: ["Absensi dan lokasi", "Perizinan", "Library dokumen"],
  },
  {
    nama: "Profesional",
    bulanan: 11900,
    tahunan: 9900,
    catatan: "per karyawan, per bulan",
    tombol: "Pilih Profesional",
    unggulan: true,
    fitur: [
      "Semua fitur Esensial",
      "Penggajian dan slip digital",
      "Exam karyawan",
      "Rekap lembur",
    ],
  },
  {
    nama: "Korporasi",
    bulanan: null,
    tahunan: null,
    catatan: "Disesuaikan dengan skala perusahaan",
    tombol: "Hubungi tim kami",
    fitur: [
      "Semua fitur Profesional",
      "Persetujuan bertingkat",
      "Peran dan akses khusus",
      "Pendampingan implementasi",
    ],
  },
];

function tampil(p, tahunan) {
  const nilai = tahunan ? p.tahunan : p.bulanan;
  if (nilai === null) return "Kustom";
  if (nilai === 0) return "Gratis";
  return "Rp" + nilai.toLocaleString("id-ID");
}

function Harga() {
  const [tahunan, setTahunan] = useState(false);

  return (
    <section className="hg" id="harga">
      <div className="hg-kepala">
        <h2 className="judul">Paket untuk setiap skala perusahaan.</h2>

        <div className="hg-pilih">
          <button
            className={!tahunan ? "aktif" : ""}
            onClick={() => setTahunan(false)}
          >
            Bulanan
          </button>
          <button
            className={tahunan ? "aktif" : ""}
            onClick={() => setTahunan(true)}
          >
            Tahunan, lebih hemat
          </button>
        </div>
      </div>

      <div className="hg-panel">
        {paket.map((p) => (
          <div
            className={p.unggulan ? "hg-kolom unggul" : "hg-kolom"}
            key={p.nama}
          >
            {p.unggulan && <span className="hg-label">Paling dipilih</span>}
            <h3>{p.nama}</h3>
            <p className="hg-angka">{tampil(p, tahunan)}</p>
            <p className="hg-catatan">{p.catatan}</p>

            <ul>
              {p.fitur.map((f) => (
                <li key={f}>
                  <Check size={18} />
                  {f}
                </li>
              ))}
            </ul>

            <a href="#kontak" className="hg-tombol">
              {p.tombol}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Harga;
