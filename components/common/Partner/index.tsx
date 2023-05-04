import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import Container from '../Container'
import Typography from '../Typography'

const partners = [
  {
    image: '/images/heatstroke.svg',
    link: '#',
    scale: 100,
  },
  {
    image: '/images/kryptoria.svg',
    link: 'https://kryptoria.io',
    scale: 100,
  },
  {
    image: '/images/addland.svg',
    link: 'https://addland.com',
    scale: 100,
  },
  {
    image: '/images/nutmeg.svg',
    link: 'https://www.nutmeg.com/',
    scale: 75,
  },
]

const PartnerSection = () => (
  <Container className="py-28 lg:py-56">
    <Typography variant="h4" className="mb-16 text-center">
      Supporting innovative teams every step of the way
    </Typography>
    <div className="flex flex-col justify-around gap-y-10 sm:flex-row">
      {partners.map((partner, i) => (
        <Link href={partner.link} key={`partner_${i + 1}`} target="_blank">
          <Image
            src={partner.image}
            fill
            className={classnames(`scale-${partner.scale}`, "!static mx-auto !h-[70px] !w-auto ")}
            alt={`partner_${i + 1}`}
          />
        </Link>
      ))}
    </div>
  </Container>
)

export default PartnerSection
