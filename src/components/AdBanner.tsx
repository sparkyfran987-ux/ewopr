import Image from "next/image";
import type { BannerSize } from "@/data/banners";

const SLOT: Record<BannerSize, { width: number; height: number; label: string }> = {
  "728x90": { width: 728, height: 90, label: "728 × 90" },
  "300x250": { width: 300, height: 250, label: "300 × 250" },
};

type AdBannerProps = {
  size: BannerSize;
  src?: string;
  alt?: string;
  className?: string;
};

export default function AdBanner({ size, src, alt = "Auspiciador", className = "" }: AdBannerProps) {
  const slot = SLOT[size];

  return (
    <aside
      className={`mx-auto overflow-hidden border border-white/10 bg-zinc-950 ${className}`}
      style={{ width: "100%", maxWidth: slot.width, height: slot.height }}
      aria-label={`Banner ${slot.label}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={slot.width}
          height={slot.height}
          className="h-full w-full object-contain bg-black"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-1 border border-dashed border-white/15 bg-zinc-900/60 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-zinc-500">Auspiciador</p>
          <p className="font-mono text-xs text-zinc-600">{slot.label}</p>
        </div>
      )}
    </aside>
  );
}
