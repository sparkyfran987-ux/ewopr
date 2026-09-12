import Image from "next/image";
import Link from "next/link";
import BannerSlot from "@/components/BannerSlot";
import FacebookFeed from "@/components/FacebookFeed";
import HomeHero from "@/components/HomeHero";
import { listAuspiciadorImages } from "@/data/banners";
import { noticiasEWO } from "@/noticias";

export default async function Home() {
  const banners = await listAuspiciadorImages();
  const destacada = noticiasEWO[0];
  const resto = noticiasEWO.slice(1);

  return (
    <main className="overflow-x-hidden">
      <HomeHero />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex justify-center py-8">
          <BannerSlot size="728x90" files={banners} index={0} />
        </div>

        <section className="grid gap-6 pb-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70">
            <div className="relative aspect-video">
              <Image 
                src="/ewohorazero.png" 
                alt="EWO Hora Zero" 
                fill 
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 66vw, 880px"
                className="object-cover" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Próximo evento</p>
                <h2 className="font-display text-4xl text-white sm:text-6xl">EWO Hora Zero</h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-zinc-300">
                  Sábado 3 de octubre de 2026 · 8:00 PM
                </p>
                <Link
                  href="/eventos"
                  className="mt-5 inline-block bg-gold px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-black hover:bg-white"
                >
                  Detalles
                </Link>
              </div>
            </div>
          </article>

          <div className="flex flex-col items-center gap-6">
            <article className="w-full max-w-[300px] rounded-2xl border border-gold/30 bg-gradient-to-br from-zinc-900 to-black p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">En televisión</p>
              <h2 className="mt-2 font-display text-3xl text-white">El Update</h2>
              <p className="mt-3 text-sm text-zinc-400">Sábados 10:00 AM por TeleOnce.</p>
              <a
                href="https://cdn.teleonce.com/en-vivo/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block bg-white px-4 py-2 text-[11px] font-black uppercase tracking-widest text-black hover:bg-gold"
              >
                En vivo
              </a>
            </article>
            <BannerSlot size="300x250" files={banners} index={0} />
          </div>
        </section>

        <section className="py-12">
          <div className="mb-8">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-gold">Noticias</p>
            <h2 className="font-display text-4xl text-white sm:text-5xl">Lo último</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="grid gap-6">
              <a
                href={destacada.link}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60"
              >
                <div className="relative aspect-[16/10]">
                  <Image 
                    src={destacada.imagen} 
                    alt={destacada.titulo} 
                    fill 
                    priority
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 66vw, 880px"
                    className="object-cover transition duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gold">{destacada.fecha}</p>
                  <h3 className="mt-2 font-display text-3xl text-white group-hover:text-gold">{destacada.titulo}</h3>
                  <p className="mt-3 text-sm text-zinc-400">{destacada.descripcion}</p>
                </div>
              </a>

              {resto.map((noticia) => (
                <a
                  key={noticia.id}
                  href={noticia.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[120px_1fr] overflow-hidden rounded-xl border border-white/10 bg-zinc-950/50 sm:grid-cols-[160px_1fr]"
                >
                  <div className="relative min-h-[110px]">
                    <Image 
                      src={noticia.imagen} 
                      alt={noticia.titulo} 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 640px) 120px, 160px" 
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">{noticia.fecha}</p>
                    <h3 className="mt-1 font-display text-xl text-white group-hover:text-gold">{noticia.titulo}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-zinc-400">{noticia.descripcion}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <BannerSlot size="300x250" files={banners} index={1} />
              <BannerSlot size="300x250" files={banners} index={2} />
            </div>
          </div>
        </section>

        <div className="flex justify-center py-4">
          <BannerSlot size="728x90" files={banners} index={1} />
        </div>

        <FacebookFeed />
      </div>
    </main>
  );
}
