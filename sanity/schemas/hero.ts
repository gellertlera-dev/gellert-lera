import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'titleLine1',
      title: 'Заголовок — строка 1',
      type: 'string',
      initialValue: 'GELLERT',
    }),
    defineField({
      name: 'titleLine2',
      title: 'Заголовок — строка 2',
      type: 'string',
      initialValue: 'LERA',
    }),
    defineField({
      name: 'roles',
      title: 'Роли (Singer / Songwriter / Streamer)',
      type: 'array',
      of: [{type: 'string'}],
      initialValue: ['SINGER', 'SONGWRITER', 'STREAMER'],
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Текст кнопки 1',
      type: 'string',
      initialValue: 'СЛУШАТЬ МУЗЫКУ',
    }),
    defineField({
      name: 'primaryButtonLink',
      title: 'Ссылка кнопки 1',
      type: 'string',
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Текст кнопки 2',
      type: 'string',
      initialValue: 'СВЯЗАТЬСЯ',
    }),
    defineField({
      name: 'secondaryButtonLink',
      title: 'Ссылка кнопки 2',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Фотография',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'musicTitle',
      title: 'Мини-плеер — название трека',
      type: 'string',
    }),
    defineField({
      name: 'musicArtist',
      title: 'Мини-плеер — имя артиста',
      type: 'string',
      initialValue: 'Gellert Lera',
    }),
    defineField({
      name: 'musicCover',
      title: 'Мини-плеер — обложка',
      type: 'image',
    }),
    defineField({
      name: 'musicLink',
      title: 'Мини-плеер — ссылка на трек',
      type: 'string',
    }),
  ],
})
