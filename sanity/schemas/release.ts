import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'release',
  title: 'Релиз',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Год',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cover',
      title: 'Обложка',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Ссылка на песню',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Порядок отображения',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Крупная карточка (для сетки)',
      type: 'boolean',
      initialValue: false,
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
    select: {title: 'title', subtitle: 'year', media: 'cover'},
  },
})
