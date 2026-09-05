"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function FacebookFeed() {
  useEffect(() => {
    window.FB?.XFBML.parse();
  }, []);

  return (
    <section className="py-16">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-gold">Desde nuestra pagina de Facebook</p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">Noticias recientes</h2>
        </div>
        <a
          href="https://www.facebook.com/ewopuertorico"
          target="_blank"
          rel="noreferrer"
          className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-400 hover:text-gold"
        >
          Página oficial →
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/50">
        <div className="flex justify-center p-4 md:p-6">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/ewopuertorico"
            data-tabs="timeline"
            data-width="500"
            data-height="720"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
          >
            <blockquote cite="https://www.facebook.com/ewopuertorico" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/ewopuertorico">EWO Puerto Rico</a>
            </blockquote>
          </div>
        </div>
      </div>

      <div id="fb-root" />
      <Script
        src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v21.0"
        strategy="lazyOnload"
        onLoad={() => {
          window.FB?.XFBML.parse();
        }}
      />
    </section>
  );
}
