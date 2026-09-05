type PageHeroProps = {
  kicker: string;
  title: string;
  highlight?: string;
  subtitle?: string;
};

export default function PageHero({ kicker, title, highlight, subtitle }: PageHeroProps) {
  return (
    <header className="mb-12 border-l-4 border-gold pl-5 sm:pl-6">
      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-gold">{kicker}</p>
      <h1 className="font-display text-5xl leading-none text-white sm:text-7xl">
        {title}
        {highlight ? <span className="text-gold"> {highlight}</span> : null}
      </h1>
      {subtitle ? <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">{subtitle}</p> : null}
    </header>
  );
}
