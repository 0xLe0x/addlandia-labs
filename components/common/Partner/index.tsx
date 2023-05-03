import Image from 'next/image'

import Container from '../Container'
import Typography from '../Typography'

const PartnerSection = () => (
  <Container className="py-28 lg:py-56">
    <Typography variant="h4" className="mb-16 text-center">
      Supporting innovative teams every step of the way
    </Typography>
    <div className="flex flex-wrap justify-center gap-y-4">
      {Array(2)
        .fill(0)
        .map((_val, i) => (
          <Image
            src={`/images/partner_${i + 1}.svg`}
            fill
            className="!static mx-auto !h-[70px] !w-auto"
            alt={`partner_${i + 1}`}
            key={`partner_${i + 1}`}
          />
        ))}
    </div>
  </Container>
)

export default PartnerSection
