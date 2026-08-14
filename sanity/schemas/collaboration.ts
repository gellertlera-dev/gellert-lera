import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'collaboration',
  title: 'Сотрудничество',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'СОТРУДНИЧЕСТВО',
    }),
    defineField({
      name: 'description',
      title: 'Текст',
      type: 'text',
    }),
    defineField({
      name: 'email',
      title: 'Email для связи',
      type: 'string',
    }),
    defineField({
      name: 'buttonText',
      title: 'Текст кнопки',
      type: 'string',
      initialValue: 'НАПИСАТЬ МНЕ',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Фоновое изображение (опционально, поверх градиента)',
      type: 'image',
    }),
  ],
})
