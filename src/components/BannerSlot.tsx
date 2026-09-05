import AdBanner from "@/components/AdBanner";
import { bannersForSize, type BannerSize } from "@/data/banners";

type BannerSlotProps = {
  size: BannerSize;
  files: string[];
  index?: number;
  className?: string;
};

export default function BannerSlot({ size, files, index = 0, className }: BannerSlotProps) {
  const pool = bannersForSize(files, size);
  const src = pool.length > 0 ? pool[index % pool.length] : undefined;

  return <AdBanner size={size} src={src} className={className} />;
}
