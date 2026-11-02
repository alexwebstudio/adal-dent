import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { AnimatedTitle } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  title: string;
  lead?: string;
  crumbs: Crumb[];
  image: string;
  imageAlt: string;
  children?: ReactNode;
  /** Для вертикальных снимков: текст слева на зелёной панели, фото справа. */
  split?: boolean;
  objectPosition?: string;
};

export function PageHero({ title, lead, crumbs, image, imageAlt, children, split, objectPosition = "center" }: PageHeroProps) {
  const text = (
    <>
      <div className="mb-auto pb-10">
        <Breadcrumbs items={crumbs} />
      </div>
      <AnimatedTitle as="h1" text={title} />
      {lead && (
        <Reveal instant delay={0.15} className="t-lead mt-5 max-w-[48ch]">
          <p>{lead}</p>
        </Reveal>
      )}
      {children && (
        <Reveal instant delay={0.2} className="mt-7 flex flex-wrap gap-3">
          {children}
        </Reveal>
      )}
    </>
  );

  if (split) {
    return (
      <section className="grid lg:grid-cols-12">
        <div className="on-accent page-top flex min-h-[52svh] flex-col pb-10 text-on-accent lg:col-span-7 lg:min-h-[66svh] lg:pb-14" style={{ background: "var(--bright)", paddingInline: "var(--gutter)" }}>
          {text}
        </div>
        <div className="relative aspect-[4/3] bg-surface-2 lg:col-span-5 lg:aspect-auto">
          <Image src={image} alt={imageAlt} fill priority quality={60} sizes="(min-width: 1024px) 40vw, 60vw" className="object-cover" style={{ objectPosition }} />
        </div>
      </section>
    );
  }

  return (
    <section className="hero-shade on-accent page-top relative isolate flex min-h-[66svh] flex-col overflow-hidden pb-10 text-on-accent lg:pb-14" style={{ background: "var(--accent-press)", paddingInline: "var(--inline)" }}>
      <Image src={image} alt={imageAlt} fill priority quality={60} sizes="(min-width: 768px) 100vw, 60vw" className="-z-10 object-cover" style={{ objectPosition }} />
      <div className="relative z-10 flex flex-1 flex-col">{text}</div>
    </section>
  );
}
