import { FC } from 'react'

import Footer from '../footer/Footer'
import Header from '../header/Header'
import type { LayoutProps } from './Layout.def'

const Layout: FC<LayoutProps> = ({ children, hasAnimatedLogo }) => (
  <div className="relative">
    <div className="absolute h-full w-full overflow-hidden pointer-events-none z-10">
      <div className="absolute -left-96 -top-96 h-[600px] w-[600px] rounded-full bg-gradient-radial from-purple-300 via-transparent to-transparent blur-[150px]"></div>
      <div className="absolute -left-10 top-0 h-[600px] w-[600px] rounded-full bg-gradient-radial from-purple-300 via-transparent to-transparent blur-[160px]"></div>
      <div className="absolute left-[550px] -top-32 h-[600px] w-[600px] rounded-full bg-gradient-radial from-primary via-transparent to-transparent blur-[180px]"></div>
      <div className="absolute right-0 top-[750px] h-[500px] w-[500px] rounded-full bg-gradient-radial from-purple-300 via-transparent to-transparent blur-[150px]"></div>
    </div>
    <Header hasAnimatedLogo={hasAnimatedLogo} />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
