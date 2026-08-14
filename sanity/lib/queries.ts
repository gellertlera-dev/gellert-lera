import {groq} from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`

export const heroQuery = groq`*[_type == "hero"][0]`

export const releasesQuery = groq`*[_type == "release"] | order(order asc)`

export const aboutQuery = groq`*[_type == "about"][0]`

export const socialsQuery = groq`*[_type == "social"] | order(order asc)`

export const liveQuery = groq`*[_type == "live"][0]`

export const collaborationQuery = groq`*[_type == "collaboration"][0]`

export const pageDataQuery = groq`{
  "siteSettings": ${siteSettingsQuery},
  "hero": ${heroQuery},
  "releases": ${releasesQuery},
  "about": ${aboutQuery},
  "socials": ${socialsQuery},
  "live": ${liveQuery},
  "collaboration": ${collaborationQuery}
}`
