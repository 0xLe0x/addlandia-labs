import groq from 'groq'
import Head from 'next/head'

import BlogSection from '@/components/common/Blog'
import { PostProps } from '@/components/common/Blog/def'
import PartnerSection from '@/components/common/Partner'
import ContactUsSection from '@/components/footer/contact-us'
import { HeroSection, ServiceSection,TrackRecordSection } from '@/components/pages/home'
import { client } from '@/sanity/lib/client'

export default function IndexPage({ posts }: { posts: PostProps[] }) {
  return (
    <>
      <Head>
        <title>Addlandia Labs</title>
      </Head>
      <HeroSection />
      <ServiceSection />
      <TrackRecordSection />
      <PartnerSection />
      <BlogSection posts={posts} />
      <ContactUsSection />
    </>
  )
}

export async function getStaticProps() {
  const posts: Array<any> = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc){
        ...,
        "name": author->name,
        "categories": categories[]->title,
        "authorImage": author->image
      }
    `)

  return {
    props: {
      posts: posts.slice(0, 3),
    },
  }
}
