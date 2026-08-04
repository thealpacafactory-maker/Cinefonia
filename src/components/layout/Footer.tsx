import React from "react";
import Link from "next/link";
import { Music, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-brand-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand & Desc */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Music className="h-6 w-6 text-brand-gold" />
              <span className="font-serif tracking-widest text-lg md:text-xl text-glow-gold">
                CINEFONÍA <span className="text-brand-gold">Nights</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Una experiencia cultural y musical de alto impacto. La música de las películas más memorables de la historia interpretada en vivo por un quinteto de cámara de primer nivel.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-gold transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-widest uppercase text-brand-gold mb-6">
              Explorar
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/eventos" className="text-gray-400 hover:text-brand-gold-light text-sm transition-colors">
                  Próximos Eventos
                </Link>
              </li>
              <li>
                <Link href="/artistas" className="text-gray-400 hover:text-brand-gold-light text-sm transition-colors">
                  Artistas
                </Link>
              </li>
              <li>
                <Link href="/patrocinadores" className="text-gray-400 hover:text-brand-gold-light text-sm transition-colors">
                  Patrocinadores
                </Link>
              </li>
              <li>
                <Link href="/quiero-auspiciar" className="text-gray-400 hover:text-brand-gold-light text-sm transition-colors">
                  Quiero Auspiciar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contenido y Prensa */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-widest uppercase text-brand-gold mb-6">
              Prensa y Blog
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/noticias" className="text-gray-400 hover:text-brand-gold-light text-sm transition-colors">
                  Últimas Noticias
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-brand-gold-light text-sm transition-colors">
                  Blog Cultural
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-brand-gold-light text-sm transition-colors">
                  Contacto General
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Info & Location */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold tracking-widest uppercase text-brand-gold mb-6">
              El Evento Central
            </h3>
            <div className="flex items-start space-x-3 text-sm text-gray-400">
              <MapPin className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-200">Teatro Municipal de Arequipa</p>
                <p className="text-xs">Calle Mercaderes 239, Arequipa, Perú</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <Mail className="h-5 w-5 text-brand-gold flex-shrink-0" />
              <span>contacto@cinefonia-nights.pe</span>
            </div>
            <p className="text-xs text-gray-500 pt-2">
              Estreno: 22 de Agosto de 2026<br />
              Aforo exclusivo: 850 personas
            </p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-brand-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {currentYear} CINEFONÍA Nights. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-xs">
            <Link href="/politica-privacidad" className="text-gray-500 hover:text-brand-gold transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-500 hover:text-brand-gold transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
