import { MessageCircle, Mail, MapPin } from "lucide-react";
import { buatLinkWa, formatNomor } from "@/lib/whatsapp";
import "./Kontak.css";

function Kontak({ site }) {
  const link = buatLinkWa(site.whatsappNomor, site.whatsappPesan);

  const info = [
    {
      ikon: MessageCircle,
      label: "WhatsApp",
      isi: formatNomor(site.whatsappNomor),
    },
    { ikon: Mail, label: "Email", isi: site.email },
    { ikon: MapPin, label: "Kantor", isi: site.kota },
  ];

  return (
    <section className="kt" id="kontak">
      <div className="kt-dalam">
        <div className="kt-kiri">
          <h2 className="judul">Mari bahas kebutuhan HR perusahaan Anda.</h2>
          <p>
            Ceritakan skala dan kebutuhan tim Anda. Kami siapkan rekomendasi
            modul dan paket yang paling sesuai.
          </p>
          <a
            className="tombol emas"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={20} />
            Konsultasi via WhatsApp
          </a>
        </div>

        <ul className="kt-info">
          {info.map((i) => {
            const Ikon = i.ikon;
            return (
              <li key={i.label}>
                <Ikon size={22} />
                <div>
                  <small>{i.label}</small>
                  <span>{i.isi}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Kontak;
