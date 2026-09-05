import LeaderboardBanner from "@/components/LeaderboardBanner";

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <LeaderboardBanner />
      </div>
      {children}
    </>
  );
}
