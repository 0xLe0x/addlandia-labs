import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

import ServiceCard from '@/components/common/Card/ServiceCard'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const BigOrSmallSection = () => {
  return (
    <div>
      <Container className="py-20 md:pb-32 md:pt-40">
        <div className="mx-auto flex max-w-[950px] flex-col justify-center gap-4">
          <Typography variant="h6" className="text-center text-primary">
            We do it all
          </Typography>
          <Typography variant="h3" className="text-center">
            Big or small
          </Typography>
          <Typography variant="subtitle1" className="py-2 text-center">
            Our team has worked across technology sectors, stacks and chains for
            decades. Our passion is focusing that expertise into results for
            you.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-20 gap-y-16 pt-28 text-lg sm:gap-y-28 md:grid-cols-2">
          <ServiceCard
            icon={
              <CloudArrowUpIcon className="h-6 w-6 text-white sm:h-[30px] sm:w-[30px]" />
            }
            title="Web3 Platforms"
            large
          >
            Adoption of Web3 has never been greater. We are here to support you
            in understanding how blockchain can enhance your business.
          </ServiceCard>
          <ServiceCard
            icon={<LockClosedIcon className="h-[30px] w-[30px] text-white" />}
            title="Web2 Platforms"
            large
          >
            Whilst we are specialists in Web3, our roots are in traditional web
            development. If your idea doesn&apos;t utilise blockchain,
            that&apos;s ok!
          </ServiceCard>
          <ServiceCard
            icon={<ArrowPathIcon className="h-[30px] w-[30px] text-white" />}
            title="NFT Projects"
            large
          >
            From growing a community to minting out your project, we know how to
            connect your idea with NFT collectors.
          </ServiceCard>
          <ServiceCard
            icon={<FingerPrintIcon className="h-[30px] w-[30px] text-white" />}
            title="Blockchain Games"
            large
          >
            We have in-house engineers who are experts in developing fun and
            immersive Web3 and mobile games
          </ServiceCard>
        </div>
      </Container>
    </div>
  )
}

export default BigOrSmallSection