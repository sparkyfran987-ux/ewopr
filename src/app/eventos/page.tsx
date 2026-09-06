import type { Metadata } from "next";

import Image from "next/image";

import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Eventos",
};

const cartelera = [
  {
    tipo: "Proximamente",
    lucha: "Pendientes a las redes de EWO Puerto Rico para mas información.",
  },
];

export default function EventosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <PageHero
        kicker="Cartelera oficial"
        title="Eventos"
        subtitle="La acción de EWO en vivo. Pendiente a El Update por TeleOnce para más detalles."
      />

      <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-2xl">
        <div className="relative aspect-video w-full bg-black">
          <Image
            src="/ewosinimagen.jpg"
            alt="EWO Live"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">
                Próximo evento estelar
              </p>
              <h2 className="font-display text-5xl text-gold sm:text-6xl">
                EWO LIVE
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 border-l-2 border-gold/40 pl-6 sm:grid-cols-2 sm:gap-10">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gold">
                  Fecha
                </p>
                <p className="text-xl font-bold uppercase">
                  Sábado 19 de septiembre de 2026
                </p>
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gold">
                  Hora
                </p>
                <p className="text-xl font-bold uppercase">8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="mb-6 text-[11px] font-black uppercase tracking-[0.35em] text-gold">
              Cartelera
            </p>

            <ol className="space-y-4">
              {cartelera.map((combate, index) => (
                <li
                  key={combate.lucha}
                  className="rounded-xl border border-white/10 bg-black/40 p-4 sm:p-5"
                >
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
                      {combate.tipo}
                    </p>
                    <p className="mt-1 text-base font-bold text-white sm:text-lg">
                      {combate.lucha}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
