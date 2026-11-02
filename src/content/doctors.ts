// Только реальные данные клиники. Выдумывать фамилии, образование и стаж нельзя.
// Когда клиника пришлёт данные: заполните карточку и поставьте published: true, появится страница врача.
// Врач без фото показывается с заглушкой: добавьте image и imageAlt, когда появится снимок.

export type Doctor = {
  slug: string;
  name: string;
  headline: string;
  role: string;
  specialization: string;
  experience: string;
  about: string;
  education: string[];
  serviceSlugs: string[];
  image?: string;
  imageAlt?: string;
  published: boolean;
};

const doctor = (slug: string, name: string): Doctor => ({
  slug,
  name,
  headline: `Стоматолог *${name}*`,
  role: "Стоматолог Adal dent",
  specialization: "",
  experience: "",
  about: "",
  education: [],
  serviceSlugs: [],
  published: false,
});

export const doctors: Doctor[] = [
  {
    ...doctor("abylaikhan", "Абылайхан"),
    image: "/images/clinic/doctor.jpg",
    imageAlt: "Стоматолог Абылайхан в белом халате и бинокулярных лупах",
  },
  doctor("nurbol", "Нурбол"),
  doctor("ratmir", "Ратмир"),
];

export const publishedDoctors = doctors.filter((item) => item.published);

export function getDoctor(slug: string) {
  return publishedDoctors.find((item) => item.slug === slug);
}
