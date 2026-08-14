import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'live',
  title: 'Live',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'LIVE',
    }),
    defineField({
      name: 'heading',
      title: 'Основной текст (например: "Концерты скоро здесь")',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Подпись',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Фоновое изображение (опционально)',
      type: 'image',
    }),
  ],
})
