// ЕДИНАЯ ТОЧКА ПРАВКИ ДАННЫХ КЛИНИКИ.
// Источники: карточка 2ГИС, профиль Instagram клиники. Новые факты вносить только с подтверждения клиники.

export const site = {
  brand: "Adal dent",
  legal: "ИП Adal Dent",
  descriptor: "Adal dent · стоматология",
  // Девиз из профиля клиники.
  motto: { kk: "Әрбір тіс — бүтін бір ағза", ru: "Каждый зуб — целый организм" },
  slogan: "Каждый зуб — целый организм",
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? "https://adal-dent.vercel.app",
  city: "Алматы",

  phone: "+7 (707) 611-60-84",
  phoneHref: "tel:+77076116084",
  whatsapp: "https://wa.me/77076116084",
  instagram: "https://instagram.com/adal_dent_almaty",
  instagramHandle: "@adal_dent_almaty",
  gis: "https://2gis.kz/almaty/firm/70000001056710850",

  address: "мкр. Аксай-1, 6",
  district: "Ауэзовский район",
  postalCode: "050031",
  country: "KZ",
  hours: "с 09:00 до 20:00, по предварительной записи",
  directions: "Микрорайон Аксай-1, Ауэзовский район. Маршрут откроется в 2ГИС.",
  mapEmbed: "" as string,

  developer: { label: "Разработка сайта", name: "AlexWebStudio", href: "https://alexwebstudio.ru" },

  // Значения из карточки 2ГИС.
  stats: { rating: 5, reviews: 100, ratings: 222 },
} as const;

export function whatsappLink(text: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function formatPrice(value: number) {
  return `${value.toLocaleString("ru-RU").replace(/ |\s/g, " ")} ₸`;
}
