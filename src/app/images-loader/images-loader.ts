const ASSET_IMAGES = import.meta.glob<string>(
  "@/assets/images/*.{png,jpg,jpeg,svg,webp}",
  { eager: true, import: "default" },
);

export function resolveImageFromAssets(
  fileNameOrPath: string,
  fallbackFileName = "logo.png",
): string {
  const fileName = fileNameOrPath.split("/").pop() || fileNameOrPath;

  const matchKey = Object.keys(ASSET_IMAGES).find((k) =>
    k.endsWith(`/${fileName}`),
  );

  if (matchKey) return ASSET_IMAGES[matchKey];

  const fallbackKey = Object.keys(ASSET_IMAGES).find((k) =>
    k.endsWith(`/${fallbackFileName}`),
  );

  if (fallbackKey) return ASSET_IMAGES[fallbackKey];

  return "";
}
