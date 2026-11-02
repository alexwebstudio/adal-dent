import { doctorsBlock } from "@/content/copy";
import { doctors } from "@/content/doctors";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";

export function Doctors() {
  return (
    <SectionCard>
      <SectionHead eyebrow={doctorsBlock.eyebrow} title={doctorsBlock.title} lead={doctorsBlock.lead} link={{ label: doctorsBlock.all, href: "/doctors" }} />
      <Reveal group className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3 lg:gap-x-5">
        {doctors.map((doctor) => (
          <div key={doctor.slug} data-reveal-item="">
            <DoctorCard doctor={doctor} sizes="(min-width: 640px) 32vw, 100vw" />
          </div>
        ))}
      </Reveal>
    </SectionCard>
  );
}
