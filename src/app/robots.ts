import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cinefonia-nights.pe";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"], // Excluye endpoints de datos o paneles futuros
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
