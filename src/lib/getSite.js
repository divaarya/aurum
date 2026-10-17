import { siteConfig } from "@/data/siteConfig";

// Sekarang mengembalikan data bawaan.
// Besok isinya diganti: ambil dari API admin panel,
// dan kalau gagal tetap kembali ke siteConfig.
export async function getSite() {
  return siteConfig;
}
