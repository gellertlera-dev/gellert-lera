'use client'

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  basePath: '/studio',
  name: 'gellert-lera',
  title: 'Gellert Lera — CMS',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Контент сайта')
          .items([
            S.listItem()
              .title('Настройки сайта')
              .child(
                S.document().schemaType('siteSettings').documentId('siteSettings')
              ),
            S.listItem()
              .title('Hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.divider(),
            S.documentTypeListItem('release').title('Релизы'),
            S.divider(),
            S.listItem()
              .title('Обо мне')
              .child(S.document().schemaType('about').documentId('about')),
            S.documentTypeListItem('social').title('Соцсети'),
            S.listItem()
              .title('Live')
              .child(S.document().schemaType('live').documentId('live')),
            S.listItem()
              .title('Сотрудничество')
              .child(
                S.document()
                  .schemaType('collaboration')
                  .documentId('collaboration')
              ),
          ]),
    }),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
