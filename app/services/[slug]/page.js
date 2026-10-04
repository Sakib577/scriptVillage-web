import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService, services } from "@/lib/services";

// Only the slugs below exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.en.title} — Code Molecule`,
    description: `${service.en.tagline} ${service.en.summary}`,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  if (!getService(slug)) notFound();

  return (
    <>
      <Header />
      <main>
        <ServiceDetail slug={slug} />
      </main>
      <Footer />
    </>
  );
}
