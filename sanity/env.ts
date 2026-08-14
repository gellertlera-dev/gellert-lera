export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const dataset = assertValue(process.env.NEXT_PUBLIC_SANITY_DATASET)

export const projectId = assertValue(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)

function assertValue<T>(v: T | undefined): T {
  if (v === undefined) {
    // During local scaffolding / build without env vars set yet,
    // fall back to empty string instead of throwing so `next build`
    // can still run before Sanity is connected.
    return '' as unknown as T
  }
  return v
}
