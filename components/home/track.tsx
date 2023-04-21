import Image from 'next/image'

import Container from '../common/Container'
import TrackRecordCard from '../common/TrackRecordCard'

const TrackRecord = () => {
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
      <div className="flex basis-1/2 items-center justify-center sm:px-10 lg:px-20 xl:px-32">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="text-lg font-semibold text-primary">
            Our track record
          </div>
          <h2 className="mb-6 text-3xl sm:text-5xl font-bold">
            Trusted by thoudsands of creators worldwide
          </h2>
          <p className="mb-14 text-xl leading-9">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

export default TrackRecord
