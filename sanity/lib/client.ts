import {createClient} from 'next-sanity'
import {apiVersion, dataset, projectId} from '../env'

// `createClient` throws if projectId is empty, but we want the app to run
// (using placeholder content, see lib/get-page-data.ts) before Sanity is
// connected. Use a harmless placeholder id in that case; it's never
// actually queried because getPageData() checks `isSanityConfigured` first.
export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset: dataset || 'production',
  apiVersion,
  // false in dev/preview so edits in Sanity show up immediately;
  // Next's own fetch cache + revalidate tags handle production caching.
  useCdn: process.env.NODE_ENV === 'production',
})
