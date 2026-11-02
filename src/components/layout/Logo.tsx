import Link from "next/link";
import { site } from "@/content/site";
import { LogoMark } from "@/components/ui/Icons";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2.5" aria-label={`${site.brand}, на главную`}>
      <LogoMark width={36} height={36} className="flex-none text-accent" />
      <span className="whitespace-nowrap font-display text-[24px] uppercase leading-none tracking-[0.08em]">{site.brand}</span>
    </Link>
  );
}
