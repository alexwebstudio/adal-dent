// Только реальные данные клиники. Выдумывать врачей, имена, образование и стаж нельзя.
// Когда клиника пришлёт данные: заполните карточку и поставьте published: true, появится страница врача.
// Слот без фото показывает заглушку. Лишние слоты можно удалить, новые добавить.

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

const slot = (index: number): Doctor => ({
  slug: `doctor-${index}`,
  name: "Врач клиники",
  headline: "Врач *клиники*",
  role: "Фото и данные скоро появятся",
  specialization: "",
  experience: "",
  about: "",
  education: [],
  serviceSlugs: [],
  published: false,
});

export const doctors: Doctor[] = [
  {
    ...slot(1),
    role: "Стоматолог Adal dent",
    image: "/images/clinic/doctor.jpg",
    imageAlt: "Стоматолог клиники Adal dent в белом халате и бинокулярных лупах показывает большие пальцы",
  },
  slot(2),
  slot(3),
  slot(4),
];

export const publishedDoctors = doctors.filter((doctor) => doctor.published);

export function getDoctor(slug: string) {
  return publishedDoctors.find((item) => item.slug === slug);
}
