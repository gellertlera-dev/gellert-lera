import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    defineField({
      name: 'logoLine1',
      title: 'Логотип — строка 1',
      type: 'string',
      initialValue: 'GELLERT',
    }),
    defineField({
      name: 'logoLine2',
      title: 'Логотип — строка 2',
      type: 'string',
      initialValue: 'LERA',
    }),
    defineField({
      name: 'email',
      title: 'Email для связи',
      type: 'string',
    }),
    defineField({
      name: 'navigation',
      title: 'Навигация',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {name: 'label', title: 'Текст', type: 'string'},
            {name: 'href', title: 'Ссылка (#id или /путь)', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO — заголовок сайта',
      type: 'string',
      initialValue: 'Gellert Lera — Singer, Songwriter, Streamer',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO — описание сайта',
      type: 'text',
    }),
    defineField({
      name: 'ogImage',
      title: 'SEO — картинка для соцсетей (Open Graph)',
      type: 'image',
    }),
  ],
})
