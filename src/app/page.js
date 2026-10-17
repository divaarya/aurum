import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fitur from "@/components/Fitur";
import Keunggulan from "@/components/Keunggulan";
import CaraKerja from "@/components/CaraKerja";
import Testimoni from "@/components/Testimoni";
import Harga from "@/components/Harga";
import Faq from "@/components/Faq";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import { getSite } from "@/lib/getSite";

export default async function Home() {
  const site = await getSite();
  return (
    <div>
      <Navbar site={site} />
      <Hero site={site} />
      <Fitur />
      <Keunggulan />
      <CaraKerja />
      <Testimoni />
      <Harga />
      <Faq />
      <Kontak site={site} />
      <Footer nama={site.nama} />
      <WhatsApp site={site} />
    </div>
  );
}
