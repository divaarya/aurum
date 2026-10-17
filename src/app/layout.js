import { Playfair_Display, Manrope } from "next/font/google";
import { getSite } from "@/lib/getSite";
import "./globals.css";

const judul = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-judul",
});

const isi = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata() {
  const site = await getSite();
  return {
    title: site.seo.metaTitle,
    description: site.seo.metaDescription,
    openGraph: {
      title: site.seo.metaTitle,
      description: site.seo.metaDescription,
      images: site.seo.ogImage ? [site.seo.ogImage] : [],
    },
  };
}

export default async function RootLayout({ children }) {
  const site = await getSite();
  return (
    <html lang="id">
      <body
        className={`${judul.variable} ${isi.className}`}
        style={{
          "--warna-utama": site.warnaUtama,
          "--warna-aksen": site.warnaAksen,
        }}
      >
        {children}
      </body>
    </html>
  );
}
