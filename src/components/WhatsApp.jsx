import { MessageCircle } from "lucide-react";
import { buatLinkWa } from "@/lib/whatsapp";
import "./WhatsApp.css";

function WhatsApp({ site }) {
  const link = buatLinkWa(site.whatsappNomor, site.whatsappPesan);

  return (
    <a
      className="wa"
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Konsultasi via WhatsApp"
      title="Konsultasi via WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}

export default WhatsApp;
