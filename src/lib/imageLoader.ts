import type { ImageLoaderProps } from "next/image";

// Static export doesn't prepend basePath to next/image srcs, so we do it here.
// (Returns the original file — no server optimization on a static host.)
export default function imageLoader({ src }: ImageLoaderProps): string {
  if (/^https?:\/\//.test(src)) return src;
  const base = process.env.NODE_ENV === "production" ? "/patriot-sailing" : "";
  return `${base}${src}`;
}
