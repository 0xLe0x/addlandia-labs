import Image from 'next/image'
import Link from 'next/link'
import { useNextSanityImage } from 'next-sanity-image'

import { client } from '@/sanity/lib/client'

import Container from '../Container'
import Typography from '../Typography'
import { PostProps } from './def'

const BlogSection = ({ posts }: { posts: PostProps[] }) => {
  const ImageProps = (i: number) => {
    return {
      main: useNextSanityImage(client, posts[i].mainImage),
      author: useNextSanityImage(client, posts[i].authorImage),
    }
  }

  return (
    <Container className="mb-10 md:mb-20">
      <Typography
        variant="h3"
        className="mb-6 text-center text-3xl font-bold sm:text-5xl"
      >
        On our mind
      </Typography>
      <Typography variant="subtitle2" className="text-center text-xl leading-9">
        A collection of thoughts from Addlandia Labs
      </Typography>
      <div className="mt-10 grid gap-5 lg:mt-24 lg:grid-cols-3">
        {posts.length > 0 &&
          posts.map(
            (
              {
                _id,
                title = '',
                slug = { current: '', _type: 'slug' },
                publishedAt = '',
                name = '',
              },
              index
            ) =>
              slug && (
                <div key={_id} className="overflow-hidden rounded-[20px]">
                  <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                    <div className="relative">
                      <Image
                        {...ImageProps(index).main}
                        className="h-[320px] w-full object-cover sm:h-[400px] md:h-[480px] lg:h-[540px]"
                        sizes="(max-width: 800px) 100vw, 800px"
                        // placeholder="blur"a
                        // blurDataURL={mainImage.asset['metadata']['lqip']}
                        alt={title}
                      />
                      <div className="absolute top-0 h-full w-full bg-gradient-to-b from-transparent to-blue-950"></div>
                      <div className="absolute left-0 bottom-0 w-full p-10 text-white">
                        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                          <span>{new Date(publishedAt).toDateString()}</span>
                          <span className="hidden sm:block">·</span>
                          <span className="flex items-center gap-3">
                            <Image
                              {...ImageProps(index).author}
                              className="h-[30px] w-[30px] rounded-full"
                              sizes="(max-width: 800px) 100vw, 800px"
                              alt={title}
                            />
                            <span>{name}</span>
                          </span>
                        </div>
                        <div className="text-xl font-semibold sm:w-5/6">
                          {title}
                        </div>
                      </div>
                    </div>
                  </Link>{' '}
                </div>
              )
          )}
      </div>
    </Container>
  )
}

export default BlogSection
