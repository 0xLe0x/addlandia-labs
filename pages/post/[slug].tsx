import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import groq from 'groq'
import Image from 'next/image'

import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'
import ContactUsSection from '@/components/footer/contact-us'

import { client } from '../../sanity/lib/client'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="flex justify-center">
          <Image
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value)
              .width(480)
              .height(360)
              .fit('max')
              .auto('format')
              .toString()}
            width={480}
            height={360}
          />
        </div>
      )
    },
  },
}

const Post = ({ post }) => {
  const {
    title = 'Missing title',
    mainImage,
    name = 'Missing name',
    publishedAt,
    categories,
    authorImage,
    body,
  } = post ?? {
    title: 'Missing title',
    mainImage: {
      _type: 'image',
      asset: [],
    },
    name: 'Missing name',
    publishedAt: '',
    categories: null,
    authorImage: {
      _type: 'image',
      asset: [],
    },
    body: [],
  }
  return (
    <>
      {post && (
        <div className="flex justify-center py-24 lg:py-40">
          <div>
            <div className="w-full max-w-5xl sm:px-6 lg:px-9">
              <Image
                src={urlFor(mainImage).width(1600).url()}
                width={1600}
                height={900}
                alt={name}
                className="mb-10 w-full"
              />
            </div>
            <div className="w-full max-w-5xl px-6 lg:px-9">
              <div className="mb-10">
                <div className="mb-8 flex gap-5">
                  {authorImage && (
                    <div>
                      <Image
                        src={urlFor(authorImage).width(50).url()}
                        width={50}
                        height={50}
                        alt={name}
                        className="rounded-full"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center gap-1">
                    <Typography variant="subtitle4">{name}</Typography>
                    <Typography variant="subtitle4">
                      {new Date(publishedAt).toDateString()}
                    </Typography>
                  </div>
                </div>
                <Typography variant="h4">{title}</Typography>
                {categories && (
                  <ul>
                    {categories.map((category) => (
                      <li key={category}>{category}</li>
                    ))}
                  </ul>
                )}
              </div>
              <PortableText value={body} components={ptComponents} />
            </div>
          </div>
        </div>
      )}
      <ContactUsSection />
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  "name": author->name,
  publishedAt,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })
  console.log(post)
  return {
    props: {
      post,
    },
  }
}
export default Post
