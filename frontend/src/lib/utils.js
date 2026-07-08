import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { baseURL } from "./axios";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Builds a "no image" placeholder URL (hosted over https) for the given size, e.g. "300x200".
export function getPlaceholderImage(size = "300x200") {
  return `https://placehold.co/${size}?text=No+Image`;
}

// Resolves a product image path into a full, https-safe URL.
// - Cloudinary/remote images already start with "http" and are returned as-is.
// - Legacy local uploads (e.g. "uploads/xyz.jpg") are prefixed with the API baseURL.
// - Missing images fall back to a placeholder.
export function getImageUrl(image, size = "300x200") {
  if (!image) return getPlaceholderImage(size);
  if (image.startsWith("http")) return image;
  return `${baseURL}/${image}`;
}
