import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Соцсеть',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Платформа',
      type: 'string',
      options: {
        list: [
          {title: 'YouTube', value: 'youtube'},
          {title: 'TikTok', value: 'tiktok'},
          {title: 'Twitch', value: 'twitch'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'Telegram', value: 'telegram'},
          {title: 'VK', value: 'vk'},
          {title: 'VK Play', value: 'vkplay'},
          {title: 'Другое', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Название (отображается на карточке)',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Ссылка',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Порядок отображения',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Порядок отображения',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'label', subtitle: 'url'},
  },
})
