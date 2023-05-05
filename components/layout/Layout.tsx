import { useRouter } from 'next/router'
import { FC } from 'react'

import Footer from '../footer/Footer'
import Header from '../header/Header'
import type { LayoutProps } from './Layout.def'

const Layout: FC<LayoutProps> = ({ children, hasAnimatedLogo }) => {
  const router = useRouter()
  if (router.asPath.includes('/studio')) {
    return <main>{children}</main>
  }

  return (
    <div className="relative">
      <div className="pointer-events-none absolute z-10 h-full w-full overflow-hidden">
        <div className="absolute -left-96 -top-96 h-[600px] w-[600px] rounded-full bg-gradient-radial from-purple-300 via-transparent to-transparent blur-[150px]"></div>
        <div className="absolute -left-10 top-0 h-[600px] w-[600px] rounded-full bg-gradient-radial from-purple-300 via-transparent to-transparent blur-[160px]"></div>
        <div className="absolute left-[550px] -top-32 h-[600px] w-[600px] rounded-full bg-gradient-radial from-primary via-transparent to-transparent blur-[180px]"></div>
        <div className="absolute right-0 top-[750px] h-[500px] w-[500px] rounded-full bg-gradient-radial from-purple-300 via-transparent to-transparent blur-[150px]"></div>
        <div className="absolute left-[450px] top-[1850px] h-[500px] w-[500px] rounded-full bg-gradient-radial from-primary via-transparent to-transparent blur-[150px]"></div>
        <div className="absolute left-[150px] top-[2450px] h-[500px] w-[500px] rounded-full bg-gradient-radial from-purple-300 via-transparent to-transparent blur-[150px]"></div>
        <div className="absolute right-[100px] top-[2950px] h-[500px] w-[500px] rounded-full bg-gradient-radial from-primary via-transparent to-transparent blur-[150px]"></div>
        <div className="absolute -left-[100px] top-[4050px] h-[500px] w-[500px] rounded-full bg-gradient-radial from-primary via-transparent to-transparent blur-[150px]"></div>
      </div>
      <div className="relative z-20">
        <Header hasAnimatedLogo={hasAnimatedLogo} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
