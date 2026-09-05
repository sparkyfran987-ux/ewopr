"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const programas = [
  {
    nombre: "EWO El Update",
    logo: "/elupdate.jpg",
    horario: "Sábados @ 10:00 AM",
    btnText: "Sintoniza",
    btnLogo: "/t11.png",
    link: "https://cdn.teleonce.com/en-vivo/",
    descripcion:
      "El programa oficial con las noticias de última hora, entrevistas y anuncios de las próximas carteleras de la EWO.",
    destacado: true,
  },
  {
    nombre: "El Wizard Analiza",
    logo: "/elwizard.jpg",
    horario: "Horario anunciado en redes",
    btnText: "Sintoniza",
    btnLogo: "/yt.png",
    link: "https://www.youtube.com/@ewopuertorico",
    descripcion:
      "Sin filtro ni rodeos. El Wizard desmenuza todo lo ocurrido en la EWO, analiza las rivalidades, repasa las jugadas sucias y dice lo que nadie más se atreve a decir.",
    destacado: false,
  },
  {
    nombre: "EWO Sunday Slam",
    logo: "/sundayslam.jpg",
    horario: "Horario anunciado en redes",
    btnText: "Sintoniza",
    btnLogo: "/yt.png",
    link: "https://www.youtube.com/@ewopuertorico",
    descripcion:
      "El repaso oficial de lo ocurrido en el evento de la noche anterior. Resultados, reacciones y lo que viene después del ring.",
    destacado: false,
  },
];

export default function ProgramasPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <PageHero
        kicker="En vivo y on demand"
        title="Programación"
        subtitle="Sintoniza la alternativa real en TeleOnce, YouTube y Patreon."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {programas.map((prog, index) => (
          <motion.article
            key={prog.nombre}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className={`group flex flex-col overflow-hidden rounded-2xl border bg-zinc-950/70 shadow-2xl transition ${
              prog.destacado ? "border-gold/50" : "border-white/10 hover:border-gold/40"
            }`}
          >
            <div className="relative h-56 w-full overflow-hidden bg-black">
              <Image
                src={prog.logo}
                alt={prog.nombre}
                fill
                className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                priority={index < 2}
              />
              <span className="absolute top-4 right-4 rounded-sm bg-gold px-3 py-1 text-[10px] font-black uppercase italic text-black shadow-xl">
                {prog.horario}
              </span>
            </div>

            <div className="flex flex-grow flex-col bg-gradient-to-b from-zinc-900/50 to-black p-8">
              <h2 className="mb-4 font-display text-3xl text-white transition group-hover:text-gold">{prog.nombre}</h2>
              <p className="mb-8 flex-grow text-sm leading-relaxed text-zinc-400">{prog.descripcion}</p>
              <a
                href={prog.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 border border-white/10 bg-white/5 p-4 transition hover:bg-gold"
              >
                <span className="flex items-center gap-4">
                  <span className="relative h-8 w-16">
                    <Image src={prog.btnLogo} alt="" fill className="object-contain" />
                  </span>
                  <span className="text-sm font-black uppercase tracking-widest text-white hover:text-black">
                    {prog.btnText}
                  </span>
                </span>
                <span className="text-gold">→</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-yellow-900/20" />
        <div className="relative z-10 flex flex-col items-center justify-between gap-10 p-10 md:flex-row md:p-16">
          <div className="max-w-2xl">
            <h2 className="mb-6 font-display text-4xl leading-tight text-white md:text-5xl">
              ¿Te perdiste <span className="text-gold">El Update</span>?
            </h2>
            <p className="mb-8 text-lg text-zinc-400">
              Accede a repeticiones completas de EWO El Update por Youtube.
            </p>
            <a
              href="https://www.youtube.com/@ewopuertorico"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-6 rounded-full bg-gold px-10 py-5 font-black uppercase text-black transition hover:bg-white"
            >
              <Image src="/yt.png" alt="Youtube" width={90} height={20} className="object-contain" />
              Acceder ahora
            </a>
          </div>
          <div className="relative h-40 w-40 opacity-40 md:h-48 md:w-48">
            <Image src="/yt.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </div>
    </main>
  );
}
