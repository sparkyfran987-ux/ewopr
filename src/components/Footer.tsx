import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-4xl text-white">EWO</p>
          <p className="mt-2 max-w-xs text-sm text-zinc-400">
            EWO Puerto Rico, Tu Alternativa Real en la Lucha Libre 
          </p>
        </div>
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Explorar</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>
              <Link href="/eventos" className="hover:text-gold">
                Cartelera
              </Link>
            </li>
            <li>
              <Link href="/programas" className="hover:text-gold">
                Programas
              </Link>
            </li>
            <li>
              <Link href="/shopzone" className="hover:text-gold">
                ShopZone
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Redes</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>
              <a href="https://www.facebook.com/ewopuertorico" target="_blank" rel="noreferrer" className="hover:text-gold">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@ewopuertorico" target="_blank" rel="noreferrer" className="hover:text-gold">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.patreon.com/EWOPuertoRico" target="_blank" rel="noreferrer" className="hover:text-gold">
                Patreon
              </a>
            </li>
            <li>
              <a href="mailto:ewoofpr@gmail.com" className="hover:text-gold">
                ewoofpr@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/5 py-6 text-center text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-600">
        © 2026 EWO Puerto Rico
      </p>
    </footer>
  );
}
