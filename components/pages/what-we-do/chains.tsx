import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const chains = [
  '/images/eth.svg',
  '/images/sol.svg',
  '/images/matic.svg',
  '/images/avax.svg',
  '/images/bnb.svg',
]

const ChainSection = () => (
  <Container className="py-28 lg:py-56">
    <Typography variant="h4" className="mb-16 text-center">
      Chains we build on
    </Typography>
    <Fade>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
        {chains.map((chain, i) => (
          <Image
            src={chain}
            fill
            className="!static mx-auto !h-[70px] !w-auto"
            alt={`chain_${i}`}
            key={`chain_${i}`}
          />
        ))}
      </div>
    </Fade>
  </Container>
)

export default ChainSection
