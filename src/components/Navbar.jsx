"use client";

import { useState } from "react";
import { Gem, Menu, Phone, Mail, X } from "lucide-react";
import { formatNomor } from "@/lib/whatsapp";
import "./Navbar.css";

function Navbar({ site }) {
  const [buka, setBuka] = useState(false);
  const tutup = () => setBuka(false);

  return (
    <>
      <div className="nv-atas">
        <div className="nv-atas-dalam">
          <span>
            <Phone size={15} />
            {formatNomor(site.whatsappNomor)}
          </span>
          <span>
            <Mail size={15} />
            {site.email}
          </span>
        </div>
      </div>

      <header className="nv">
        <div className="nv-dalam">
          <div className="nv-logo">
            <span className="nv-tanda">
              <Gem size={18} />
            </span>
            {site.nama}
          </div>

          <nav className={buka ? "nv-menu buka" : "nv-menu"}>
            <a href="#fitur" onClick={tutup}>
              Modul
            </a>
            <a href="#cara-kerja" onClick={tutup}>
              Implementasi
            </a>
            <a href="#harga" onClick={tutup}>
              Harga
            </a>
            <a href="#faq" onClick={tutup}>
              Tanya jawab
            </a>
            <a href="#kontak" onClick={tutup}>
              Kontak
            </a>
          </nav>

          <a href="#kontak" className="tombol nv-cta">
            Konsultasi
          </a>

          <button
            className="nv-toggle"
            onClick={() => setBuka(!buka)}
            aria-label="Buka menu"
          >
            {buka ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
