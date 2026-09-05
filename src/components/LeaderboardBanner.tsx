import AdBanner from "@/components/AdBanner";
import { bannersForSize, listAuspiciadorImages } from "@/data/banners";

export default async function LeaderboardBanner() {
  const files = await listAuspiciadorImages();
  const src = bannersForSize(files, "728x90")[0];

  return (
    <div className="flex justify-center py-6">
      <AdBanner size="728x90" src={src} />
    </div>
  );
}
