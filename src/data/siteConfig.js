// Data bawaan. Nanti diganti oleh data dari API admin panel.
export const siteConfig = {
  nama: "Aurum",
  warnaUtama: "#0b4f3a",
  warnaAksen: "#c9a24b",
  heroJudul:
    "Sistem HR kelas enterprise untuk perusahaan yang terus bertumbuh.",
  heroDeskripsi:
    "Aurum menyatukan absensi, penggajian, ujian, dokumen, dan perizinan karyawan dalam satu platform yang tertata, aman, dan siap mendukung operasional perusahaan Anda.",
  ctaTeks: "Jadwalkan konsultasi",
  // Nomor asli cukup ditulis di .env.local, bukan di file ini.
  whatsappNomor: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  whatsappPesan:
    "Halo Aurum, saya ingin menjadwalkan konsultasi mengenai sistem HR untuk perusahaan kami.",
  email: "konsultasi@aurum.example",
  kota: "Jakarta Selatan, DKI Jakarta",
  seo: {
    metaTitle: "Aurum - Platform HR untuk Perusahaan Enterprise",
    metaDescription:
      "Kelola absensi, gaji, exam, library, dan perizinan karyawan dalam satu platform HR yang tertata dan aman.",
    ogImage: "",
  },
};
