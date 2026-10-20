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

  const title = site.seo.metaTitle || "Aurum";
  const description =
    site.seo.metaDescription ||
    "Kelola sumber daya manusia dengan lebih mudah bersama Aurum.";

  const image = "/opengraph-image.png";

  return {
    metadataBase: new URL("https://rosea-lhfx.vercel.app"),

    title,
    description,

    openGraph: {
      title,
      description,
      siteName: "Aurum",
      url: "https://rosea-lhfx.vercel.app/",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Aurum - Sistem HR",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
