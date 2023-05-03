import Image from 'next/image'
import Link from 'next/link'

import Container from '../Container'
import Typography from '../Typography'

const partners = [
  {
    image: '/images/heatstroke.svg',
    link: '#',
  },
  {
    image: '/images/kryptoria.svg',
    link: 'https://kryptoria.io',
  },
  {
    image: '/images/addland.svg',
    link: 'https://addland.com',
  },
  {
    image: '/images/nutmeg.svg',
    link: 'https://www.nutmeg.com/',
  },
]

const PartnerSection = () => (
  <Container className="py-28 lg:py-56">
    <Typography variant="h4" className="mb-16 text-center">
      Supporting innovative teams every step of the way
    </Typography>
    <div className="flex flex-col justify-around gap-y-10 sm:flex-row">
      {partners.map((partner, i) => (
        <Link href={partner.link} key={`partner_${i + 1}`}>
          <Image
            src={partner.image}
            fill
            className="!static mx-auto !h-[70px] !w-auto"
            alt={`partner_${i + 1}`}
          />
        </Link>
      ))}
    </div>
  </Container>
)

export default PartnerSection
