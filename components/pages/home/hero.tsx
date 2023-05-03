import Button from '@/components/common/Button'
import Typography from '@/components/common/Typography'

const HeroSection = () => {
  // const [hasLoaderLoaded, setLoaderLoaded] = useState(false)
  // const [hasFluidLoaded, setFluidLoaded] = useState(false)
  // const [shouldShowTypewriter, setShowTypewriter] = useState(false)

  // const canvasRef = useRef<HTMLCanvasElement | null>(null)
  // const loaderRef = useRef<HTMLDivElement | null>(null)

  // const hasMounted = useMounting()
  // const { scrollPosition, size: windowSize } = useWindowUtils()

  // const windowHeightPercentage =
  //   ((scrollPosition || 0) / (windowSize.height || 0)) * 100

  // const handleButtonClick = () => {
  //   window.scrollTo({ top: windowSize.height, behavior: 'smooth' })
  // }

  // useEffect(() => {
  //   if (canvasRef.current !== null) {
  //     fluid(canvasRef.current)
  //     setTimeout(() => {
  //       setFluidLoaded(true)

  //       if (loaderRef.current !== null) {
  //         loaderRef.current.style.visibility = 'hidden'
  //       }
  //     }, 2000)
  //     setTimeout(() => setShowTypewriter(true), 4000)
  //   }
  // }, [canvasRef, hasMounted])

  // useEffect(() => {
  //   setLoaderLoaded(true)
  // }, [])

  return (
    <div className="relative h-screen w-full" data-aos="fade">
      {/* <Transition
        as="div"
        className="fixed z-20 flex h-full w-full items-center justify-center bg-primary text-4xl font-bold leading-none md:text-6xl lg:text-9xl"
        show={!hasFluidLoaded}
        enter="transition-all duration-1000"
        enterFrom="translate-y-[100vh]"
        enterTo="translate-y-0"
        leave="transition-all duration-1000"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-[100vh]"
      >
        Addlandia Labs
      </Transition> */}
      {/* 
      <div
        ref={loaderRef}
        className={classNames(
          'bg-neutral-800 fixed z-30 h-full w-full transition-opacity',
          {
            'opacity-0': hasLoaderLoaded,
            'opacity-100': !hasLoaderLoaded,
          }
        )}
      /> */}

      {/* <canvas
        ref={canvasRef}
        className={classNames('bg-neutral-800 absolute h-full w-full blur-sm', {
          'opacity-0': !hasMounted,
          'opacity-100': hasMounted,
        })}
      /> */}

      <div
        className="absolute inset-x-0 mx-auto flex h-screen max-w-[1100px] flex-col items-center justify-center gap-10 px-4 sm:px-6 lg:px-8"
        // style={{
        //   transform: `translateY(${
        //     ((windowSize.height || 0) - 100) / 2 + (scrollPosition || 0) / 2
        //   }px)`,
        //   opacity: `${
        //     100 - (windowHeightPercentage <= 100 ? windowHeightPercentage : 100)
        //   }%`,
        // }}
      >
        <div className="flex justify-center">
          <span className="text-md flex flex-col justify-center gap-1 rounded-full border px-4 py-2 text-center md:flex-row md:text-lg">
            <Typography variant="subtitle3">
              Blockchain value creation for businesses.
            </Typography>
            <Button href="#" primary noPadding showArrow>
              Read more
            </Button>
          </span>
        </div>
        <Typography variant="h1" className="text-center">
          We build dreams
        </Typography>
        <Typography variant="subtitle1" className="text-center">
          We are a digital product studio specialising in crafting innovative
          blockchain-enabled solutions across web and mobile. We help innovators
          bring new ideas to life.
        </Typography>
        <div className="flex gap-2">
          <Button href="/contact-us" fill primary>
            Contact us
          </Button>
          <Button href="#service" showArrow>
            Learn more
          </Button>
        </div>
      </div>

      {/* <div
        className="absolute inset-x-0 bottom-32 z-10 flex justify-center md:hidden"
        style={{
          opacity: `${
            100 - (windowHeightPercentage <= 100 ? windowHeightPercentage : 100)
          }%`,
        }}
      >
        <button
          type="button"
          className="bg-violet-500 inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm text-white"
          onClick={handleButtonClick}
        >
          Explore
          <ArrowDownIcon className="h-4 w-4" />
        </button>
      </div> */}

      {/* <div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-800 to-transparent"
        style={{
          height: `${
            windowHeightPercentage <= 50 ? windowHeightPercentage : 50
          }%`,
        }}
      /> */}
    </div>
  )
}

export default HeroSection
