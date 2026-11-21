import {createHash} from 'node:crypto'
import {mkdir, readFile, readdir, writeFile} from 'node:fs/promises'
import {extname, join} from 'node:path'
import {fileURLToPath} from 'node:url'

const outputDirectory = new URL('../out/', import.meta.url)
const mediaDirectory = new URL('../out/media/', import.meta.url)

async function listFiles(directory) {
  const entries = await readdir(directory, {withFileTypes: true})
  const files = []

  for (const entry of entries) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await listFiles(path)))
    else files.push(path)
  }

  return files
}

const html = await readFile(new URL('../out/index.html', import.meta.url), 'utf8')
const matches = html.match(/https:\/\/cdn\.sanity\.io\/images\/[^"'<>\s]+/g) ?? []
const urls = [
  ...new Set(
    matches
      .filter((url) => !url.includes('\\'))
      .map((url) => url.replaceAll('&amp;', '&'))
  ),
]

await mkdir(mediaDirectory, {recursive: true})

const replacements = new Map()

for (const url of urls) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`)

  const contentType = response.headers.get('content-type') ?? ''
  const extension = contentType.includes('avif')
    ? '.avif'
    : contentType.includes('webp')
      ? '.webp'
      : contentType.includes('png')
        ? '.png'
        : '.jpg'
  const fileName = `${createHash('sha256').update(url).digest('hex').slice(0, 20)}${extension}`
  await writeFile(new URL(fileName, mediaDirectory), Buffer.from(await response.arrayBuffer()))
  replacements.set(url, `/media/${fileName}`)
}

const textExtensions = new Set(['.html', '.txt', '.js', '.css', '.xml'])

for (const file of await listFiles(fileURLToPath(outputDirectory))) {
  if (!textExtensions.has(extname(file))) continue
  let content = await readFile(file, 'utf8')

  for (const [url, localUrl] of replacements) {
    content = content
      .replaceAll(url, localUrl)
      .replaceAll(url.replaceAll('&', '&amp;'), localUrl)
      .replaceAll(url.replaceAll('&', '\\u0026'), localUrl)
  }

  await writeFile(file, content)
}

console.log(`Localized ${replacements.size} Sanity images.`)
