# Adal dent — сайт стоматологической клиники

Next.js 16 (App Router), TypeScript, Tailwind CSS v4, GSAP + ScrollTrigger, Lenis.

```bash
npm install
npm run dev
```

Проверка перед выкладкой:

```bash
npm run typecheck
npm run build
npm run start
```

Запускайте команды из папки проекта: корень для Turbopack задан в `next.config.ts` через `process.cwd()`.

## Правило честности

На сайте только подтверждённые факты. Врачей, отзывы, работы, цены, стаж, гарантии и статистику выдумывать нельзя.

## Что заполнить данными клиники

| Что | Где |
|---|---|
| Контакты, часы, рейтинг | `src/content/site.ts` |
| Прайс | `src/content/prices.ts`: сумма вместо `price: null` заменяет кнопку «Уточнить» |
| Врачи | `src/content/doctors.ts`: данные, фото в `public/images/clinic/`, затем `published: true` |
| Общее фото команды | `PhotoSlot` в `src/components/home/Doctors.tsx` |
| Отзывы | `src/content/reviews.ts`: дословный текст, новые добавляются в конец |
| Работы до/после | `src/content/cases.ts`: блок и страница `/cases` появятся с первой работой |
| Временные фото | заменить файлы в `public/images/hero` и `public/images/services` |
| Политика конфиденциальности | `src/app/privacy/page.tsx`: текст должен согласовать юрист |

## Заявки

Скопируйте `.env.example` в `.env.local` и заполните `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `NEXT_PUBLIC_SITE_URL`.

Без переменных Telegram заявка никуда не уходит, поэтому форма предлагает отправить готовый текст в WhatsApp клиники.

## Деплой на Vercel

Это отдельный проект: свой репозиторий на GitHub и свой проект на Vercel, общего с исходным прототипом нет.

1. Создать пустой репозиторий на GitHub и запушить в него эту папку.
2. На Vercel импортировать репозиторий как новый проект. Настройки сборки Next.js определятся сами.
3. Задать переменные окружения: `NEXT_PUBLIC_SITE_URL` (адрес сайта без слэша на конце), `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.
4. После подключения домена обновить `NEXT_PUBLIC_SITE_URL` и пересобрать проект.

## Шрифты

Лежат в `public/fonts`, подключены через `next/font/local` в `src/lib/fonts.ts`.

| Шрифт | Роль | Ограничения |
|---|---|---|
| Pribylskaia | название, заголовки, крупные цифры | только капс; нет казахских букв и `· ₸` |
| Golos Text | текст, интерфейс, девиз на казахском | OFL |
| JetBrains Mono | сроки, номера, рейтинг | OFL; нет `₸` и части казахских букв |

К Pribylskaia приложена только строка копирайта, без условий лицензии: перед коммерческим запуском уточните их у автора.

## Анимации

Секции остаются серверными компонентами: анимации вешаются на data-атрибуты в `src/hooks/useReveal.ts`. Первый экран и прелоадер анимируются чистым CSS.

| Атрибут | Эффект |
|---|---|
| `data-split` | Blur Reveal по буквам для заголовков |
| `data-reveal` | появление снизу, с `data-blur` ещё и из размытия |
| `data-reveal-group` + `data-reveal-item` | Blur In для карточек, каскадом |
| `data-count` | Number Roll |
| `data-float`, `data-parallax` | парение и параллакс зуба |

Запускать появления только через `playOnEnter` из `src/lib/gsap.ts`.

## Фото

Источники и авторы перечислены в `public/images/CREDITS.md`.
