import { cx } from "@/lib/utils";
import { LogoMark } from "./Icons";
import { Mono } from "./Mono";

// Заглушка для реального фото клиники. Стоковые лица вместо сотрудников ставить нельзя.
export function PhotoSlot({ label, className }: { label: string; className?: string }) {
  return (
    <span className={cx("photo-slot", className)}>
      <LogoMark width={64} height={64} strokeWidth={1.6} />
      <Mono className="!text-[13px]">{label}</Mono>
    </span>
  );
}
