import Link from "next/link";
import { footer } from "@/content/copy";
import { site } from "@/content/site";
import { ArrowUpRight, Instagram, Pin, WhatsApp } from "@/components/ui/Icons";

const socials = [
  { href: site.whatsapp, label: "WhatsApp", Icon: WhatsApp },
  { href: site.instagram, label: "Instagram", Icon: Instagram },
  { href: site.gis, label: "Клиника в 2ГИС", Icon: Pin },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface" style={{ paddingInline: "var(--inline)" }}>
      <div>
        <div aria-hidden="true" className="footer-wordmark pt-10 lg:pt-14">
          {site.brand}
        </div>

        <div className="grid gap-10 border-t border-line py-10 lg:grid-cols-12 lg:py-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[32px] uppercase leading-none lg:text-[40px]">{site.slogan}</p>
            <p className="mt-4 max-w-[40ch] text-ink-muted">{footer.description}</p>
          </div>

          <nav aria-label="Навигация в подвале" className="lg:col-span-3">
            <p className="t-eyebrow mb-4">Разделы</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 lg:grid-cols-1">
              {footer.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[16px] transition-colors hover:text-accent-press">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="t-eyebrow mb-4">Контакты</p>
            <address className="space-y-2.5 not-italic">
              <a href={site.phoneHref} className="t-mono block !text-[20px] font-medium transition-colors hover:text-accent-press">
                {site.phone}
              </a>
              <p className="text-ink-muted">
                {site.city}, {site.address}
              </p>
              <p className="text-ink-muted">{site.hours}</p>
            </address>
            <div className="mt-5 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 transition-colors hover:bg-accent hover:text-white">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-line py-5 text-[13px] text-ink-muted">
          <div className="grid items-center gap-2 text-center md:grid-cols-3">
            <p className="md:text-left">© 2026 {site.brand}</p>
            <Link href="/privacy" className="justify-self-center transition-colors hover:text-accent-press">
              Политика конфиденциальности
            </Link>
            <p className="md:text-right">
              {site.developer.label} —{" "}
              <a href={site.developer.href} target="_blank" rel="noopener" className="group inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-accent-press">
                {site.developer.name}
                <ArrowUpRight width={13} height={13} className="transition-transform duration-500 group-hover:rotate-45" />
              </a>
            </p>
          </div>
          <p className="mt-3 text-center">{site.legal}</p>
        </div>
      </div>
    </footer>
  );
}
