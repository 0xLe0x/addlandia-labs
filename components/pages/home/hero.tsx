import Button from '@/components/common/Button'
import Typography from '@/components/common/Typography'

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full" data-aos="fade">
      <div className="absolute inset-x-0 mx-auto flex h-screen max-w-[1100px] flex-col items-center justify-center gap-10 px-4 sm:px-6 lg:px-8">
        <div className="hidden justify-center md:flex">
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
    </div>
  )
}

export default HeroSection
