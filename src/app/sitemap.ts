import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://dishasawantt.github.io/patriot-sailing";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/cruises", "/lessons", "/about", "/gift", "/faq", "/contact"];
  return routes.map((r) => ({
    url: base + r,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
