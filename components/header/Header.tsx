import Link from 'next/link'
import classNames from 'classnames'
import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import lottie, { AnimationItem } from 'lottie-web'
import Image from 'next/image'
import { useElementUtils, useWindowUtils } from '../../app/app.hooks'
import type { HeaderProps } from './Header.def'

const Header: FC<HeaderProps> = ({ hasAnimatedLogo }) => {
  const headerRef = useRef<HTMLElement | null>(null)
  const lottieRef = useRef<HTMLDivElement | null>(null)
  const lottieAnimationRef = useRef<AnimationItem | null>(null)

  const [isLottieAnimationComplete, setLottieAnimationComplete] =
    useState(false)

  const { scrollPosition, size: windowSize } = useWindowUtils()
  const { size: headerSize } = useElementUtils(headerRef)

  const isHeaderAboveTheFold =
    typeof scrollPosition !== 'undefined' &&
    typeof windowSize.height !== 'undefined' &&
    typeof headerSize.height !== 'undefined' &&
    scrollPosition >= 0 &&
    scrollPosition < windowSize.height - headerSize.height

  const isHeaderBelowTheFold =
    typeof scrollPosition !== 'undefined' &&
    typeof windowSize.height !== 'undefined' &&
    typeof headerSize.height !== 'undefined' &&
    scrollPosition >= windowSize.height - headerSize.height

  const hasUserScrolled =
    typeof scrollPosition !== 'undefined' && scrollPosition > 200

  const handleContactClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  useEffect(() => {
    if (lottieRef.current !== null && lottieAnimationRef.current === null) {
      lottieAnimationRef.current = lottie.loadAnimation({
        name: 'logo',
        container: lottieRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/lottie/logo.json',
      })

      lottieAnimationRef.current.addEventListener('complete', () => {
        setLottieAnimationComplete(true)
      })
    }
  }, [lottieRef])

  useEffect(() => {
    if (lottieAnimationRef.current !== null) {
      setLottieAnimationComplete(false)

      if (hasUserScrolled) {
        lottieAnimationRef.current.setDirection(1)
        lottieAnimationRef.current.setSpeed(1)
      } else {
        lottieAnimationRef.current.setDirection(-1)
        lottieAnimationRef.current.setSpeed(5)
      }

      lottieAnimationRef.current.play()
    }
  }, [hasUserScrolled, lottieAnimationRef])

  return (
    <nav
      className={classNames(
        'bg-neutral-900 fixed inset-x-0 top-0 z-10 bg-opacity-0 backdrop-blur transition-all'
      )}
      ref={headerRef}
    >
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-center py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
        <div className="absolute left-9 w-full">
          <Link href="/" className="flex items-end gap-2">
            <div
              ref={lottieRef}
              className={classNames('-m-10 h-28 w-28 transition-opacity', {
                'opacity-0': !hasUserScrolled && isLottieAnimationComplete,
                'opacity-100': hasUserScrolled && isLottieAnimationComplete,
                'duration-200': !hasUserScrolled,
                'duration-1000': hasUserScrolled,
                hidden: !hasAnimatedLogo,
              })}
            />
            <Image
              className={classNames({
                hidden: hasAnimatedLogo,
              })}
              src="/images/logo.png"
              alt="Addlandia Labs"
              width={49}
              height={35}
            />
            <span className="-mb-[3px] text-xl font-semibold leading-none">
              <span className="text-primary">Addlandia </span>
              Labs
            </span>
          </Link>
        </div>
        <div className="hidden gap-12 text-lg font-semibold sm:flex">
          <Link
            className="relative leading-none text-text transition-all duration-500 after:absolute after:inset-x-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:text-primary hover:after:w-full hover:after:bg-primary"
            href="#"
          >
            Who We Are
          </Link>
          <Link
            className="relative leading-none text-text transition-all duration-500 after:absolute after:inset-x-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:text-primary hover:after:w-full hover:after:bg-primary"
            href="#"
          >
            What We Do
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
