// Цены выдумывать нельзя. price: null выводит кнопку «Уточнить» со ссылкой в WhatsApp.
// Когда клиника пришлёт прайс, подставьте сумму в тенге: она появится вместо кнопки.

export type PriceItem = { name: string; includes: string; price: number | null };
export type PriceSection = { id: string; title: string; items: PriceItem[] };

export const priceNote = "Итоговую стоимость врач называет после осмотра, до начала лечения. Актуальный прайс подскажет администратор.";

export const prices: PriceSection[] = [
  {
    id: "diagnostics",
    title: "Диагностика",
    items: [
      { name: "Консультация и осмотр", includes: "знакомство с врачом, оценка состояния зубов", price: null },
      { name: "План лечения", includes: "варианты лечения и этапы", price: null },
    ],
  },
  {
    id: "therapy",
    title: "Терапия",
    items: [
      { name: "Лечение кариеса", includes: "обезболивание, лечение, пломба", price: null },
      { name: "Лечение пульпита", includes: "лечение каналов, пломба", price: null },
      { name: "Реставрация зуба", includes: "восстановление формы", price: null },
    ],
  },
  {
    id: "implantation",
    title: "Имплантация",
    items: [
      { name: "Установка импланта", includes: "хирургический этап", price: null },
      { name: "Коронка на импланте", includes: "ортопедический этап", price: null },
    ],
  },
  {
    id: "orthodontics",
    title: "Ортодонтия",
    items: [
      { name: "Консультация ортодонта", includes: "оценка прикуса", price: null },
      { name: "Брекет-система", includes: "установка и наблюдение", price: null },
      { name: "Элайнеры", includes: "прозрачные капы", price: null },
    ],
  },
  {
    id: "prosthetics",
    title: "Протезирование",
    items: [
      { name: "Коронка", includes: "примерка, фиксация", price: null },
      { name: "Винир", includes: "один зуб", price: null },
      { name: "Мост", includes: "замена отсутствующих зубов", price: null },
    ],
  },
  {
    id: "kids",
    title: "Детская стоматология",
    items: [
      { name: "Осмотр ребёнка", includes: "знакомство, проверка зубов", price: null },
      { name: "Лечение молочного зуба", includes: "лечение и пломба", price: null },
    ],
  },
  {
    id: "hygiene",
    title: "Гигиена",
    items: [
      { name: "Профессиональная чистка", includes: "ультразвук, удаление камня, полировка", price: null },
    ],
  },
  {
    id: "surgery",
    title: "Хирургия",
    items: [
      { name: "Удаление зуба", includes: "анестезия, рекомендации", price: null },
      { name: "Удаление зуба мудрости", includes: "анестезия, рекомендации", price: null },
      { name: "Костная пластика", includes: "подготовка к имплантации", price: null },
    ],
  },
  {
    id: "esthetics",
    title: "Эстетика",
    items: [
      { name: "Отбеливание зубов", includes: "консультация и процедура", price: null },
      { name: "Виниры", includes: "изменение формы и цвета", price: null },
    ],
  },
];

export function priceSection(id: string) {
  const section = prices.find((item) => item.id === id);
  if (!section) throw new Error(`Нет раздела цен: ${id}`);
  return section;
}
