"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/eventos", label: "Eventos" },
  { href: "/programas", label: "Programas" },
  { href: "/shopzone", label: "ShopZone" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="relative z-10 flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="EWO Puerto Rico" width={56} height={56} className="h-12 w-12 object-contain sm:h-14 sm:w-14" priority />
          <div className="hidden leading-none sm:block">
            <p className="font-display text-2xl text-white">EWO</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">Puerto Rico</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-sm px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] transition-colors ${
                    active ? "bg-gold text-black" : "text-zinc-300 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/eventos"
          className="hidden bg-gold px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-black transition hover:bg-white lg:inline-flex"
        >
          Cartelera
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-zinc-950 lg:hidden">
          <ul className="flex flex-col px-4 py-3">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-3 text-sm font-black uppercase tracking-[0.2em] ${
                      active ? "text-gold" : "text-zinc-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
