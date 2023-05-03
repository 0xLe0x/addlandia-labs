import groq from 'groq'

import BlogSection from '@/components/common/Blog'
import { PostProps } from '@/components/common/Blog/def'
import ContactUsSection from '@/components/footer/contact-us'
import { MissionSection, TeamSection } from '@/components/pages/who-we-are'
import { client } from '@/sanity/lib/client'

const WhoWeArePage = ({ posts }: { posts: PostProps[] }) => {
  return (
    <>
      <MissionSection />
      <TeamSection />
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

export default WhoWeArePage
