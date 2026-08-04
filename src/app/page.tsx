import React from "react";
import Hero from "@/components/sections/Hero";
import Recitales from "@/components/sections/Recitales";
import Experience from "@/components/sections/Experience";
import FeaturedArtists from "@/components/sections/FeaturedArtists";
import Sponsors from "@/components/sections/Sponsors";
import PartnershipForm from "@/components/sections/PartnershipForm";
import LatestNews from "@/components/sections/LatestNews";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cinefonia-nights.pe";

  // Schema.org Event para el concierto
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "CINEFONÍA Nights - La música del cine, vivida en escena",
    "startDate": "2026-08-22T19:30:00-05:00",
    "endDate": "2026-08-22T21:00:00-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Teatro Municipal de Arequipa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle Mercaderes 239",
        "addressLocality": "Arequipa",
        "addressRegion": "Arequipa",
        "addressCountry": "PE"
      }
    },
    "description": "Un recital inmersivo de música de cámara y cine que se estrenará en el Teatro Municipal de Arequipa. 75 minutos de emoción pura sin intermedio.",
    "image": `${siteUrl}/images/og-main.jpg`,
    "organizer": {
      "@type": "Organization",
      "name": "CINEFONÍA",
      "url": siteUrl
    },
    "performer": [
      {
        "@type": "Person",
        "name": "María Lucía Roca Gamarra",
        "jobTitle": "Dirección Artística / Piano"
      },
      {
        "@type": "Person",
        "name": "Julián Enríquez",
        "jobTitle": "Dirección Musical / Flauta"
      },
      {
        "@type": "Person",
        "name": "Lucho Vera",
        "jobTitle": "Violinista I"
      },
      {
        "@type": "Person",
        "name": "Mijael Jesús Cuarite Cáceres",
        "jobTitle": "Violista"
      },
      {
        "@type": "Person",
        "name": "Ederson Maquito Velarde",
        "jobTitle": "Violonchelista"
      }
    ]
  };

  return (
    <>
      {/* Event Schema Injection */}
      <JsonLd data={eventSchema} />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Próximos Recitales */}
      <Recitales />

      {/* 3. La Experiencia */}
      <Experience />

      {/* 4. Artistas Destacados */}
      <FeaturedArtists />

      {/* 5. Patrocinadores */}
      <Sponsors />

      {/* 6. Formulario "Construyamos algo extraordinario" */}
      <PartnershipForm />

      {/* 7. Noticias y Blog */}
      <LatestNews />
    </>
  );
}
