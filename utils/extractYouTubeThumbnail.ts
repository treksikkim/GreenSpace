import { extractYoutubeId } from "./extractYoutubeId";

export function extractYouTubeThumbnail(url: string): string {
  const youtubeID = extractYoutubeId(url);

  if (youtubeID) {
    return `https://img.youtube.com/vi/${youtubeID}/hqdefault.jpg`;
  }

  return "/placeholder-image.jpg";
}
