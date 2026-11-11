import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { company, isLocale } from "@/lib/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Products from "@/components/Products";
import Showcase from "@/components/Showcase";
import { Process, Sectors, Stats, WhyUs } from "@/components/Features";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Cursor, Preloader, ScrollProgress, SmoothScroll, WhatsAppFloat } from "@/components/Effects";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: t.meta.siteName,
    description: t.meta.description,
    telephone: company.phones.map((p) => p.tel),
    address: {
      "@type": "PostalAddress",
      streetAddress: t.email.side.addressValue,
      addressLocality: "Baghdad",
      addressCountry: "IQ",
    },
  };

  return (
    <>
      <SmoothScroll />
      <Preloader text={t.loader} />
      <Cursor />
      <ScrollProgress />
      <div className="noise" />
      <Header t={t} locale={locale} />
      <main>
        <Hero t={t} />
        <Marquee items={t.marquee} />
        <About t={t} />
        <Stats t={t} locale={locale} />
        <Products t={t} />
        <Showcase t={t} rtl={t.dir === "rtl"} />
        <WhyUs t={t} />
        <Process t={t} />
        <Sectors t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
      <WhatsAppFloat phone={company.whatsapp} message={t.whatsappMsg} label="WhatsApp" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
