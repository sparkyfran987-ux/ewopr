"use client";

import { motion } from "framer-motion";
import { Facebook, Mail, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import SponsorWall from "@/components/SponsorWall";

export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PageHero
            kicker="Management y publicidad"
            title="Contacto"
            subtitle="Auspicios, preventa de eventos o contrataciones directas."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.a
              href="mailto:ewoofpr@gmail.com"
              whileHover={{ x: 8 }}
              className="flex items-center gap-6 rounded-xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-md"
            >
              <div className="rounded-sm bg-gold p-3 text-black">
                <Mail size={24} strokeWidth={3} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email oficial</p>
                <p className="text-lg font-black italic">ewoofpr@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/ewopuertorico"
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 8 }}
              className="flex items-center gap-6 rounded-xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-md"
            >
              <div className="rounded-sm bg-blue-600 p-3 text-white">
                <Facebook size={24} strokeWidth={3} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Facebook</p>
                <p className="text-lg font-black italic">/ewopuertorico</p>
              </div>
            </motion.a>
          </div>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden rounded-xl bg-gold p-10 shadow-[0_0_30px_rgba(245,197,24,0.2)]">
          <div className="relative z-10 text-black">
            <ShieldCheck size={48} strokeWidth={2.5} className="mb-6" />
            <h2 className="mb-4 font-display text-4xl leading-none">
              Publicidad
              <br />y negocios
            </h2>
            <p className="text-sm font-bold text-black/80">
              Escríbenos para banners, mesas de patrocinio y activaciones en eventos.
            </p>
          </div>
          <div className="pointer-events-none absolute -right-6 -bottom-6 select-none font-display text-9xl text-black/10">
            EWO
          </div>
        </div>
      </div>

      <SponsorWall compact />
    </main>
  );
}
