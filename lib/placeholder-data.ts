import type {PageData} from './types'

// Content mirrors the brief exactly. Once Sanity is connected and documents
// are published, `lib/get-page-data.ts` will use the real CMS content
// instead of this fallback automatically — nothing here needs to change.
export const placeholderData: PageData = {
  siteSettings: {
    logoLine1: 'GELLERT',
    logoLine2: 'LERA',
    email: 'hello@gellertlera.com',
    navigation: [
      {label: 'МУЗЫКА', href: '#music'},
      {label: 'ВИДЕО', href: '#socials'},
      {label: 'ОБО МНЕ', href: '#about'},
      {label: 'LIVE', href: '#live'},
      {label: 'СОТРУДНИЧЕСТВО', href: '#collaboration'},
    ],
    seoTitle: 'Gellert Lera — Singer, Songwriter, Streamer',
    seoDescription:
      'Официальный сайт Gellert Lera — певицы, автора песен и стримера. Музыка, релизы, live-выступления и соцсети.',
  },
  hero: {
    titleLine1: 'GELLERT',
    titleLine2: 'LERA',
    roles: ['SINGER', 'SONGWRITER', 'STREAMER'],
    primaryButtonText: 'СЛУШАТЬ МУЗЫКУ',
    primaryButtonLink: '#music',
    secondaryButtonText: 'СВЯЗАТЬСЯ',
    secondaryButtonLink: '#collaboration',
    musicTitle: 'Письма',
    musicArtist: 'Gellert Lera',
    musicLink: '#music',
  },
  releases: [
    {_id: '1', title: 'Письма', year: '2025', order: 1, featured: true, link: '#'},
    {_id: '2', title: 'Горит плёнка', year: '2025', order: 2, link: '#'},
    {_id: '3', title: 'Чёрный цвет', year: '2024', order: 3, link: '#'},
    {_id: '4', title: 'Птица', year: '2024', order: 4, featured: true, link: '#'},
    {_id: '5', title: 'С новым годом', year: '2023', order: 5, link: '#'},
    {_id: '6', title: 'Я сберегу', year: '2023', order: 6, link: '#'},
    {_id: '7', title: 'Сны', year: '2023', order: 7, link: '#'},
    {_id: '8', title: 'До скорой встречи', year: '2023', order: 8, link: '#'},
    {_id: '9', title: 'Не мешай', year: '2023', order: 9, link: '#'},
  ],
  about: {
    eyebrow: 'ОБО МНЕ',
    titleLines: ['Привет,', 'я Лера!', 'И я пою ♡'],
    description:
      'Пишу песни, пою, стримлю и создаю свой мир вокруг музыки.\n\nМузыка для меня — это способ говорить о важном, чувствовать и быть ближе к вам.',
    buttonText: 'ЧИТАТЬ ДАЛЬШЕ',
    buttonLink: '#',
  },
  socials: [
    {_id: '1', platform: 'youtube', label: 'YouTube', url: '#', order: 1},
    {_id: '2', platform: 'tiktok', label: 'TikTok', url: '#', order: 2},
    {_id: '3', platform: 'twitch', label: 'Twitch', url: '#', order: 3},
    {_id: '4', platform: 'instagram', label: 'Instagram', url: '#', order: 4},
    {_id: '5', platform: 'telegram', label: 'Telegram', url: '#', order: 5},
    {_id: '6', platform: 'vk', label: 'VK', url: '#', order: 6},
    {_id: '7', platform: 'vkplay', label: 'VK Play', url: '#', order: 7},
  ],
  live: {
    title: 'LIVE',
    heading: 'Концерты скоро здесь',
    description: 'Следи за новостями в моих соцсетях!',
  },
  collaboration: {
    title: 'СОТРУДНИЧЕСТВО',
    description:
      'По вопросам рекламы, музыкальных проектов, выступлений и других предложений:',
    email: 'hello@gellertlera.com',
    buttonText: 'НАПИСАТЬ МНЕ',
  },
}
