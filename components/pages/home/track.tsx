import Image from 'next/image'

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
      <div className="flex basis-1/2 items-center justify-center px-4 sm:px-10 lg:pl-20 xl:pl-32">
        <div className="flex max-w-3xl flex-col gap-4 text-center md:text-left">
          <Typography variant="h6" className="font-semibold text-primary">
            Our track record
          </Typography>
          <Typography variant="h3" className="mb-6">
            Trusted by thoudsands of creators worldwide
          </Typography>
          <Typography variant="subtitle2" className="mb-14">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </Typography>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <TrackRecordCard title="8,000+">
              Creators on the platform
            </TrackRecordCard>
            <TrackRecordCard title="3%">Flat platform fee</TrackRecordCard>
            <TrackRecordCard title="99.9%">Uptime guarantee</TrackRecordCard>
            <TrackRecordCard title="$70M">Paid out to creators</TrackRecordCard>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default TrackRecordSection
