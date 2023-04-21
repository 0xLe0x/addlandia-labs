import { FC } from 'react'

import Footer from '../footer/Footer'
import Header from '../header/Header'
import type { LayoutProps } from './Layout.def'

const Layout: FC<LayoutProps> = ({ children, hasAnimatedLogo }) => (
  <>
    <Header hasAnimatedLogo={hasAnimatedLogo} />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
