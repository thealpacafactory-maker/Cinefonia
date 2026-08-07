import { MetadataRoute } from "next";
import noticiasData from "@/data/noticias.json";
import blogData from "@/data/blog.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cinefonia-nights.pe";

  // 1. Rutas Estáticas de la Plataforma
  const staticRoutes = [
    "",
    "/artistas",
    "/eventos",
    "/patrocinadores",
    "/contacto",
    "/quiero-auspiciar",
    "/politica-privacidad",
    "/terminos",
    "/noticias",
    "/blog",
  ].map((route) => {
    // Frecuencia y prioridad por ruta
    let changeFrequency: "weekly" | "monthly" | "yearly" = "weekly";
    let priority = 0.8;

    if (route === "") {
      priority = 1.0;
    } else if (route === "/politica-privacidad" || route === "/terminos") {
      changeFrequency = "yearly";
      priority = 0.3;
    }

    return {
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  // 2. Rutas Dinámicas para Comunicados de Prensa
  const noticiaRoutes = noticiasData.map((noticia) => ({
    url: `${siteUrl}/noticias/${noticia.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 3. Rutas Dinámicas para Entradas del Blog
  const blogRoutes = blogData.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...noticiaRoutes, ...blogRoutes];
}
