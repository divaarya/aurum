import { Gem } from "lucide-react";
import "./Footer.css";

function Footer({ nama }) {
  return (
    <footer className="ft">
      <div className="ft-dalam">
        <div className="ft-logo">
          <span className="ft-tanda">
            <Gem size={16} />
          </span>
          {nama}
        </div>

        <nav className="ft-menu">
          <a href="#fitur">Modul</a>
          <a href="#harga">Harga</a>
          <a href="#faq">Tanya jawab</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <p className="ft-hak">© 2026 {nama}. Seluruh hak dilindungi.</p>
      </div>
    </footer>
  );
}

export default Footer;
