import Image from 'next/image'

import Container from '../Container'

const BrandSection = () => (
  <Container className="py-28 lg:py-56">
    <h3 className="mb-16 text-center text-2xl font-semibold">
      Trusted by the world&apos;s most innovative teams
    </h3>
    <div className="flex flex-wrap justify-center gap-y-4">
      {Array(5)
        .fill(0)
        .map((_val, i) => (
          <Image
            src={`/images/brand_${i + 1}.png`}
            fill
            className="!static mx-auto !h-[70px] !w-auto"
            alt={`brand_${i}`}
            key={`brand_${i}`}
          />
        ))}
    </div>
  </Container>
)

export default BrandSection
