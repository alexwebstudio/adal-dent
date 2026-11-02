import type { Metadata } from "next";
import Link from "next/link";
import { CtaForm } from "@/components/home/CtaForm";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/Heading";
import { ArrowRight } from "@/components/ui/Icons";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { QuestionCard, ServiceCard } from "@/components/ui/ServiceCard";
import { priceNote } from "@/content/prices";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Услуги стоматологии, ${site.city}`,
  description: "Терапия, имплантация, ортодонтия, протезирование, детская стоматология, гигиена, хирургия и эстетика. Сначала осмотр, затем понятный план.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Все услуги в *одной* клинике"
        lead="Каждое направление начинается одинаково: осмотр, диагностика и понятный план."
        crumbs={[{ name: "Услуги", path: "/services" }]}
        image="/images/hero/cabinet.jpg"
        imageAlt="Светлый стоматологический кабинет"
      >
        <Button booking arrow>
          Записаться на приём
        </Button>
        <Button href="/prices" variant="outline-light">
          Смотреть цены
        </Button>
      </PageHero>

      <SectionCard tone="surface-2" clip>
        <SectionHead eyebrow="Направления" title="Выберите *своё* направление" lead="Откройте карточку: показания, этапы и частые вопросы." />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 100vw" />
          ))}
          <div className="sm:col-span-2 lg:col-span-4">
            <QuestionCard />
          </div>
        </div>
      </SectionCard>

      <SectionCard>
        <SectionHead eyebrow="Сравнение" title="Что входит и *сколько* стоит" lead={priceNote} link={{ label: "Полный прайс", href: "/prices" }} />
        <Reveal>
          <table className="hidden w-full border-collapse text-left md:table">
            <caption className="sr-only">Услуги, что входит и цена от</caption>
            <thead>
              <tr className="t-eyebrow">
                <th scope="col" className="pb-3 font-medium">Услуга</th>
                <th scope="col" className="pb-3 font-medium">Что входит</th>
                <th scope="col" className="pb-3 text-right font-medium">Цена</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.slug} className="hair-row">
                  <th scope="row" className="py-4 pr-6 text-[18px] font-medium">
                    <Link href={`/services/${service.slug}`} className="transition-colors hover:text-accent">
                      {service.title}
                    </Link>
                  </th>
                  <td className="py-4 pr-6 text-ink-muted">{service.includes}</td>
                  <td className="whitespace-nowrap py-4 text-right">
                    <Mono className="!text-[15px] font-medium">по запросу</Mono>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="space-y-2.5 md:hidden">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="inner-card block p-4">
                  <span className="flex items-center justify-between gap-3 font-medium">
                    {service.title} <ArrowRight />
                  </span>
                  <span className="mt-1 block text-[15px] leading-snug text-ink-muted">{service.includes}</span>
                  <Mono className="mt-2 block font-medium">по запросу</Mono>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionCard>

      <CtaForm />
    </>
  );
}
