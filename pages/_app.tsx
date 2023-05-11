import 'styles/global.css'
import 'aos/dist/aos.css'

import { IBM_Plex_Mono, Inter, PT_Serif } from '@next/font/google'
import AOS from 'aos'
import { AppProps } from 'next/app'
import { createContext, useEffect, useState } from 'react'

import Layout from '@/components/layout/Layout'

const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const NavContext = createContext([])

export default function App({ Component, pageProps }: AppProps) {
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-mono: ${mono.style.fontFamily};
            --font-sans: ${sans.style.fontFamily};
            --font-serif: ${serif.style.fontFamily};
          }
        `}
      </style>

      <NavContext.Provider value={[isNavOpen, setIsNavOpen]}>
        <Layout hasAnimatedLogo={pageProps.hasAnimatedLogo}>
          <Component {...pageProps} />
        </Layout>
      </NavContext.Provider>
    </>
  )
}
