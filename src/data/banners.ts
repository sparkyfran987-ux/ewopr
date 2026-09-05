import { readdir } from "node:fs/promises";
import path from "node:path";
import { unstable_noStore as noStore } from "next/cache";

export type BannerSize = "728x90" | "300x250";

const SIZE_PATTERN: Record<BannerSize, RegExp> = {
  "728x90": /728\s*x\s*90/i,
  "300x250": /300\s*x\s*250/i,
};

export async function listAuspiciadorImages(): Promise<string[]> {
  noStore();
  const dir = path.join(process.cwd(), "public", "auspiciadores");

  try {
    const names = await readdir(dir);
    return names
      .filter((name) => !name.startsWith(".") && /\.(png|jpe?g|webp|gif|avif)$/i.test(name))
      .sort((a, b) => a.localeCompare(b, "es"))
      .map((name) => `/auspiciadores/${name}`);
  } catch {
    return [];
  }
}

export function bannersForSize(files: string[], size: BannerSize): string[] {
  const named = files.filter((file) => SIZE_PATTERN[size].test(file));
  if (named.length > 0) return named;

  if (size === "728x90") {
    return files.filter((_, index) => index % 3 === 0);
  }

  return files.filter((_, index) => index % 3 !== 0);
}
