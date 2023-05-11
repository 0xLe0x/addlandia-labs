import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import TrackRecordCard from '@/components/common/Card/TrackRecordCard'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

const TrackRecordSection = () => {
  return (
    <Container className="flex flex-col gap-10 px-0 lg:flex-row lg:gap-0">
      <div className="w-full basis-1/2">
        <Image
          className="!static"
          alt="track-record"
          src={'/images/track.jpg'}
          fill
          sizes="auto"
        />
      </div>
      <Fade>
        <div
          className="flex basis-1/2 items-center justify-center px-4 sm:px-10 lg:pl-20 xl:pl-32"
        >
          <div className="flex max-w-3xl flex-col gap-4 text-center md:text-left">
            <Typography variant="h6" className="font-semibold text-primary">
              Our track record
            </Typography>
            <Typography variant="h3" className="mb-6">
              Trusted near and far, by big and small
            </Typography>
            <Typography variant="subtitle2" className="mb-14">
              We have worked with innovative startups and established
              enterprises worldwide. We believe size doesn&apos;t matter, but
              results do.
            </Typography>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <TrackRecordCard title="£100M+">Sales generated</TrackRecordCard>
              <TrackRecordCard title="150K">Community members</TrackRecordCard>
              <TrackRecordCard title="10+">
                On-chain coins launched
              </TrackRecordCard>
              <TrackRecordCard title="150+">
                Smart contracts deployed
              </TrackRecordCard>
            </div>
          </div>
        </div>
      </Fade>
    </Container>
  )
}

export default TrackRecordSection
