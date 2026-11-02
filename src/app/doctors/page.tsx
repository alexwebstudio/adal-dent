import type { Metadata } from "next";
import { CtaForm } from "@/components/home/CtaForm";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHead } from "@/components/ui/Heading";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { doctorsBlock } from "@/content/copy";
import { doctors } from "@/content/doctors";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Врачи клиники, ${site.city}`,
  description: `Команда стоматологической клиники ${site.brand}. Запишитесь на приём онлайн или по телефону.`,
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        title="Врачи, которые *объясняют*"
        lead="Запишитесь на приём, а администратор подскажет, какой врач вам нужен."
        crumbs={[{ name: "Врачи", path: "/doctors" }]}
        image={doctorsBlock.photo.src}
        imageAlt={doctorsBlock.photo.alt}
        objectPosition="50% 20%"
      >
        <Button booking arrow>
          Записаться на приём
        </Button>
      </PageHero>

      <SectionCard>
        <SectionHead eyebrow={doctorsBlock.eyebrow} title={doctorsBlock.title} lead={doctorsBlock.lead} />
        <Reveal group className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3 lg:gap-x-5 lg:gap-y-8">
          {doctors.map((doctor) => (
            <div key={doctor.slug} data-reveal-item="">
              <DoctorCard doctor={doctor} sizes="(min-width: 640px) 32vw, 100vw" />
              {doctor.specialization && <p className="mt-3 text-[15px] leading-snug text-ink-muted">{doctor.specialization}</p>}
              {doctor.experience && <Mono className="mt-1 block !text-[13px]">стаж {doctor.experience}</Mono>}
            </div>
          ))}
        </Reveal>
      </SectionCard>

      <CtaForm />
    </>
  );
}
