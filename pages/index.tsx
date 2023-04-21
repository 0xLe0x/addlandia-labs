import Head from 'next/head'

import Deploy from '@/components/home/deploy'
import Hero from '@/components/home/hero'
import Team from '@/components/home/team'
import TrackRecord from '@/components/home/track'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Addlandia Labs</title>
      </Head>
      <Hero />
      <Deploy />
      <TrackRecord />
      <Team />
    </>
  )
}
