import AOS from 'aos'
import groq from 'groq'
import { useEffect } from 'react'

import BlogSection from '@/components/common/Blog'
import { PostProps } from '@/components/common/Blog/def'
import ContactUsSection from '@/components/footer/contact-us'
import {
  BigOrSmallSection,
  ChainSection,
  JustGotBetterSection,
  OurServicesSection,
} from '@/components/pages/what-we-do'
import { client } from '@/sanity/lib/client'

const WhatWeDoPage = ({ posts }: { posts: PostProps[] }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <>
      <BigOrSmallSection />
      <OurServicesSection />
      <JustGotBetterSection />
      <ChainSection />
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

export default WhatWeDoPage
