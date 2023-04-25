export interface SanityImageProps {
  _type: string
  asset: []
}

export interface PostProps {
  _id: string
  title: string
  slug: { current: string; _type: string }
  publishedAt: string
  name: string
  authorImage: SanityImageProps
  mainImage: SanityImageProps
}
