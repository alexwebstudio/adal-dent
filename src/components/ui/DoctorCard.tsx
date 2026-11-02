import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/content/doctors";
import { ArrowButton } from "./ArrowButton";
import { PhotoSlot } from "./PhotoSlot";

export function DoctorCard({ doctor, sizes }: { doctor: Doctor; sizes: string }) {
  const photo = doctor.image ? (
    <span className="photo-card aspect-[3/4]">
      <Image src={doctor.image} alt={doctor.imageAlt ?? doctor.name} fill sizes={sizes} className="object-cover object-top" />
    </span>
  ) : (
    <PhotoSlot label="Фото врача" className="aspect-[3/4]" />
  );

  const caption = (
    <span className="min-w-0">
      <span className="block text-[16px] font-semibold leading-tight lg:text-[17px]">{doctor.name}</span>
      <span className="mt-0.5 block text-[14px] leading-tight text-ink-muted">{doctor.role}</span>
    </span>
  );

  if (!doctor.published) {
    return (
      <div>
        {photo}
        <span className="mt-3 block">{caption}</span>
      </div>
    );
  }

  return (
    <Link href={`/doctors/${doctor.slug}`} aria-label={`${doctor.name}, ${doctor.role.toLowerCase()}`} className="group block">
      {photo}
      <span className="mt-3 flex items-center justify-between gap-3">
        {caption}
        <span>
          <ArrowButton tone="fill" />
        </span>
      </span>
    </Link>
  );
}
