import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'Обо мне',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Надпись над заголовком',
      type: 'string',
      initialValue: 'ОБО МНЕ',
    }),
    defineField({
      name: 'titleLines',
      title: 'Заголовок (по строкам)',
      description: 'Например: "Привет,", "я Лера!", "И я пою"',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'description',
      title: 'Текст',
      type: 'text',
    }),
    defineField({
      name: 'buttonText',
      title: 'Текст кнопки',
      type: 'string',
      initialValue: 'ЧИТАТЬ ДАЛЬШЕ',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Ссылка кнопки (например, страница полной биографии)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Фотография',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
