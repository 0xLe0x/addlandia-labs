import classNames from 'classnames'
import lottie, { AnimationItem } from 'lottie-web'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'

import { useElementUtils, useWindowUtils } from '../../app/app.hooks'
import type { HeaderProps } from './Header.def'

const Header: FC<HeaderProps> = ({ hasAnimatedLogo }) => {
  const headerRef = useRef<HTMLElement | null>(null)
  // const lottieRef = useRef<HTMLDivElement | null>(null)
  // const lottieAnimationRef = useRef<AnimationItem | null>(null)
  const [isNavOpen, setIsNavOpen] = useState(false)

  // const [isLottieAnimationComplete, setLottieAnimationComplete] =
  //   useState(false)

  // const { scrollPosition, size: windowSize } = useWindowUtils()
  // const { size: headerSize } = useElementUtils(headerRef)

  // const isHeaderAboveTheFold =
  //   typeof scrollPosition !== 'undefined' &&
  //   typeof windowSize.height !== 'undefined' &&
  //   typeof headerSize.height !== 'undefined' &&
  //   scrollPosition >= 0 &&
  //   scrollPosition < windowSize.height - headerSize.height

  // const isHeaderBelowTheFold =
  //   typeof scrollPosition !== 'undefined' &&
  //   typeof windowSize.height !== 'undefined' &&
  //   typeof headerSize.height !== 'undefined' &&
  //   scrollPosition >= windowSize.height - headerSize.height

  // const hasUserScrolled =
  //   typeof scrollPosition !== 'undefined' && scrollPosition > 200

  // const handleContactClick = () => {
  //   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  // }

  // useEffect(() => {
  //   if (lottieRef.current !== null && lottieAnimationRef.current === null) {
  //     lottieAnimationRef.current = lottie.loadAnimation({
  //       name: 'logo',
  //       container: lottieRef.current,
  //       renderer: 'svg',
  //       loop: false,
  //       autoplay: false,
  //       path: '/lottie/logo.json',
  //     })

  //     lottieAnimationRef.current.addEventListener('complete', () => {
  //       setLottieAnimationComplete(true)
  //     })
  //   }
  // }, [lottieRef])

  // useEffect(() => {
  //   if (lottieAnimationRef.current !== null) {
  //     setLottieAnimationComplete(false)

  //     if (hasUserScrolled) {
  //       lottieAnimationRef.current.setDirection(1)
  //       lottieAnimationRef.current.setSpeed(1)
  //     } else {
  //       lottieAnimationRef.current.setDirection(-1)
  //       lottieAnimationRef.current.setSpeed(5)
  //     }

  //     lottieAnimationRef.current.play()
  //   }
  // }, [hasUserScrolled, lottieAnimationRef])

  return (
    <nav
      className="bg-neutral-900 fixed inset-x-0 top-0 z-10 bg-opacity-0 backdrop-blur transition-all"
      ref={headerRef}
    >
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between py-8 px-4 sm:px-6 md:justify-center lg:px-8">
        <div className="md:absolute md:left-9">
          <Link href="/" className="flex items-end gap-2">
            {/* <div
              ref={lottieRef}
              className={classNames('-m-10 h-28 w-28 transition-opacity', {
                'opacity-0': !hasUserScrolled && isLottieAnimationComplete,
                'opacity-100': hasUserScrolled && isLottieAnimationComplete,
                'duration-200': !hasUserScrolled,
                'duration-1000': hasUserScrolled,
                hidden: !hasAnimatedLogo,
              })}
            /> */}
            <Image
              className={classNames({
                hidden: hasAnimatedLogo,
              })}
              src="/logo-top.png"
              alt="Addlandia Labs"
              width={180}
              height={35}
            />
          </Link>
        </div>
        <div className="hidden gap-12 text-lg font-semibold md:flex">
          <Link
            className="relative leading-none text-text transition-all duration-500 after:absolute after:inset-x-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:text-primary hover:after:w-full hover:after:bg-primary"
            href="/who-we-are"
          >
            Who We Are
          </Link>
          <Link
            className="relative leading-none text-text transition-all duration-500 after:absolute after:inset-x-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:text-primary hover:after:w-full hover:after:bg-primary"
            href="/what-we-do"
          >
            What We Do
          </Link>
        </div>
        <section className="MOBILE-MENU flex md:hidden">
          <button
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse rounded-full bg-secondary"></span>
            <span className="block h-0.5 w-8 animate-pulse rounded-full bg-secondary"></span>
            <span className="block h-0.5 w-8 animate-pulse rounded-full bg-secondary"></span>
          </button>

          <div
            className={classNames(
              isNavOpen
                ? 'opacity-1 visible absolute top-0 left-0 z-10 flex h-screen w-full flex-col items-center bg-black bg-opacity-80 transition-opacity'
                : 'invisible h-0 w-0 opacity-0 transition-opacity'
            )}
          >
            {' '}
            <button
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="MENU-LINK-MOBILE-OPEN flex min-h-[100px] flex-col items-center justify-between gap-10 pt-32 text-lg font-semibold">
              <Link
                className="relative leading-none text-text underline underline-offset-4"
                href="/who-we-are"
              >
                Who We Are
              </Link>
              <Link
                className="relative leading-none text-text underline underline-offset-4"
                href="/what-we-do"
              >
                What We Do
              </Link>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  )
}

export default Header
